from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth import get_user_model
from django.db import connection
from django_filters import rest_framework as filters

from api.serializers import UserSerializer, NoteSerializer, VIPSerializer, VIPListSerializer
from api.models import Note, VIPModel
from api.pagination import StandardResultsSetPagination, CustomLimitOffsetPagination
from api.filters import VIPFilter



class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


# django ldap authentication class based views
class LDAPLoginView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user to access this view

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


class UserInfoFromTokenAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data)
        token = request.data.get('token')

        if not token:
             return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            access_token = AccessToken(token)
            user_id = access_token['user_id']
            User = get_user_model()
            user = User.objects.get(id=user_id)

            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                # Add other user fields as needed
            }
            return Response(user_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)


class VIPAPIView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = VIPModel.objects.all()
    serializer_class = VIPSerializer
    pagination_class = CustomLimitOffsetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = VIPFilter


class VIPBulkAPIView(generics.CreateAPIView, generics.DestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = VIPModel.objects.all()
    serializer_class = VIPListSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        try:
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get("data", {}), list):
            kwargs["many"] = True
        return super(VIPBulkAPIView, self).get_serializer(*args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        VIPModel.objects.all().delete()
        # Reset the primary key sequence
        with connection.cursor() as cursor:
            cursor.execute("ALTER SEQUENCE network_clearpassmodel_id_seq RESTART WITH 1")
        return Response(status=status.HTTP_204_NO_CONTENT)