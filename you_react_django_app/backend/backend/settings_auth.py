# from neteng_portal.settings_ldap import *

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    # "django_auth_ldap.backend.LDAPBackend",
)