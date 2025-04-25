from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from netfields import CidrAddressField


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title


PLATFORM_CHOICES = (
    ("CISCO", "CISCO"),
    ("PALO_ALTO_NETWORKS", "PALO_ALTO_NETWORKS"),
    ("CITRIX", "CITRIX"),
    ("CHECKPOINT", "CHECKPOINT"),
    ("F5", "F5"),
    ("JUNIPER", "JUNIPER"),
    ("UnKnown", "UnKnown"),
)


class VIPCIDRModel(models.Model):
    cidr = CidrAddressField(null=True, blank=True)

    def __str__(self):
        return str(self.cidr)


class VIPModel(models.Model):
    id = models.AutoField(primary_key=True)
    Platform = models.CharField(max_length=25, choices=PLATFORM_CHOICES, default="UnKnown")
    DeviceName = models.CharField(max_length=50, null=True, blank=True)
    VIPName = models.CharField(max_length=255, null=True, blank=True)
    SourceAddress = models.TextField(null=True, blank=True)
    VIPAddress = models.TextField(null=True, blank=True)
    VIPPort = models.CharField(max_length=255, null=True, blank=True)
    Protocol = models.CharField(max_length=25, null=True, blank=True)
    BackendSrc = models.TextField(null=True, blank=True)
    BackendDst = models.TextField(null=True, blank=True)
    BackendPort = models.CharField(max_length=255, null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)