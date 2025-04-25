from django.urls import include, path
from api import views
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r"fwdnet/vip", views.VIPAPIView, basename="vip")

urlpatterns = [
    # path("", include(router.urls)),
    path("fwdnet/vip/", views.VIPAPIView.as_view()),
    path("fwdnet/vip-bulk/", views.VIPBulkAPIView.as_view(), name="vip-bulk"),
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]