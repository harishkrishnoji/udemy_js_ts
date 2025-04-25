from rest_framework.pagination import PageNumberPagination
from rest_framework.pagination import LimitOffsetPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20  # Default page size
    page_size_query_param = 'page_size'  # Allows client to set page size
    max_page_size = 1000  # Maximum limit for page size


class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20
    max_limit = 1000
    limit_query_param = 'limit'
    offset_query_param = 'offset'