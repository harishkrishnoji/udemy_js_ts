import operator
from functools import reduce
from ipaddress import ip_network
from django.db.models import Q
from django.forms.widgets import Input, Select
from django_filters import CharFilter, ChoiceFilter
from django_filters import rest_framework as filters
from api import log
from api.models import PLATFORM_CHOICES, VIPModel, VIPCIDRModel


def VIPAddrObjFilter(value):
    log.debug(f"value: {value}")
    return [
        str(a.get("cidr")).replace("/32", "")
        for a in VIPCIDRModel.objects.filter(cidr__net_contains_or_equals=ip_network(value)).values()
    ]


def match_address(objs, key, value):
    excludeId = []
    for obj in objs.values():
        if value not in [o.strip().split("/")[0] for o in obj.get(key).split(",")]:
            excludeId.append(obj.get("id"))
    return excludeId


class VIPFilter(filters.FilterSet):
    Platform = ChoiceFilter(choices=PLATFORM_CHOICES, widget=Select(attrs={"class": "form-control-sm"}))
    DeviceName = CharFilter(lookup_expr="icontains", widget=Input(attrs={"class": "form-control-sm"}))
    VIPName = CharFilter(lookup_expr="icontains", widget=Input(attrs={"class": "form-control-sm"}))
    SourceAddress = CharFilter(method="custom_SourceAddress_filter", widget=Input(attrs={"class": "form-control-sm"}))
    VIPAddress = CharFilter(method="custom_VIPAddress_filter", widget=Input(attrs={"class": "form-control-sm"}))
    VIPPort = CharFilter(lookup_expr="icontains", widget=Input(attrs={"class": "form-control-sm"}))
    Protocol = CharFilter(lookup_expr="icontains", widget=Input(attrs={"class": "form-control-sm"}))
    BackendSrc = CharFilter(method="custom_BackendSrc_filter", widget=Input(attrs={"class": "form-control-sm"}))
    BackendDst = CharFilter(method="custom_BackendDst_filter", widget=Input(attrs={"class": "form-control-sm"}))
    BackendPort = CharFilter(lookup_expr="icontains", widget=Input(attrs={"class": "form-control-sm"}))

    class Meta:
        model = VIPModel
        fields = "__all__"
        exclude = ["date_created"]

    def custom_SourceAddress_filter(self, queryset, name, value):
        addrObj = VIPAddrObjFilter(value)
        if not addrObj:
            return queryset.none()
        queryObjects = queryset.filter(Q(SourceAddress__icontains=value))
        excludeId = match_address(queryObjects, "SourceAddress", value)
        return queryset.filter(reduce(operator.or_, (Q(SourceAddress__icontains=v) for v in addrObj))).exclude(
            id__in=excludeId
        )

    def custom_VIPAddress_filter(self, queryset, name, value):
        addrObj = VIPAddrObjFilter(value)
        if not addrObj:
            return queryset.none()
        queryObjects = queryset.filter(Q(VIPAddress__icontains=value))
        excludeId = match_address(queryObjects, "VIPAddress", value)
        return queryset.filter(reduce(operator.or_, (Q(VIPAddress__icontains=v) for v in addrObj))).exclude(
            id__in=excludeId
        )

    def custom_BackendSrc_filter(self, queryset, name, value):
        addrObj = VIPAddrObjFilter(value)
        if not addrObj:
            return queryset.none()
        queryObjects = queryset.filter(Q(BackendSrc__icontains=value))
        excludeId = match_address(queryObjects, "BackendSrc", value)
        return queryset.filter(reduce(operator.or_, (Q(BackendSrc__icontains=v) for v in addrObj))).exclude(
            id__in=excludeId
        )

    def custom_BackendDst_filter(self, queryset, name, value):
        addrObj = VIPAddrObjFilter(value)
        if not addrObj:
            return queryset.none()
        queryObjects = queryset.filter(Q(BackendDst__icontains=value))
        excludeId = match_address(queryObjects, "BackendDst", value)
        return queryset.filter(reduce(operator.or_, (Q(BackendDst__icontains=v) for v in addrObj))).exclude(
            id__in=excludeId
        )