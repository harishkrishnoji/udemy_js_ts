from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, VIPModel


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={"input_type": "password"})

    class Meta:
        model = User
        fields = ["username", "password"]

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


class VIPSerializer(serializers.ModelSerializer):
    class Meta:
        model = VIPModel
        fields = '__all__'


class _VIPListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        product_data = [VIPModel(**item) for item in validated_data]
        return VIPModel.objects.bulk_create(product_data)


class VIPListSerializer(serializers.ModelSerializer):
    class Meta:
        model = VIPModel
        fields = '__all__'
        list_serializer_class = _VIPListSerializer

