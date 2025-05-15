import os
import ldap
from neteng_portal.settings_auth import AUTHENTICATION_BACKENDS
from django_auth_ldap.config import LDAPSearch, GroupOfNamesType

#################################################################################
# LDAP Authentication
#################################################################################

ldap.set_option(ldap.OPT_X_TLS_REQUIRE_CERT, ldap.OPT_X_TLS_NEVER)

# Baseline configuration.
AUTH_LDAP_SERVER_URI = os.environ.get("LDAP_SERVER")
AUTH_LDAP_START_TLS = False
AUTH_LDAP_BIND_DN = os.environ.get("LDAP_BIND")
AUTH_LDAP_BIND_PASSWORD = os.environ.get("LDAP_PASSWORD")

AUTH_LDAP_USER_SEARCH = LDAPSearch(
    "dc=corp,dc=checkfree,dc=com", ldap.SCOPE_SUBTREE, "(|(userPrincipalName=%(user)s)(sAMAccountName=%(user)s))"
)

AUTH_LDAP_CONNECTION_OPTIONS = {
    ldap.OPT_DEBUG_LEVEL: 0,
    ldap.OPT_REFERRALS: 0,
}

# Populate the Django user from the LDAP directory.
AUTH_LDAP_USER_ATTR_MAP = {
    "first_name": "givenName",
    "last_name": "sn",
    "email": "mail",
}


# Set up the basic group parameters.
AUTH_LDAP_GROUP_SEARCH = LDAPSearch("dc=corp,dc=checkfree,dc=com", ldap.SCOPE_SUBTREE, "(objectClass=groupOfNames)")
AUTH_LDAP_GROUP_TYPE = GroupOfNamesType()
AUTH_LDAP_MIRROR_GROUPS = True  # Mirror groups in Django


# This is the default, but I like to be explicit.
AUTH_LDAP_ALWAYS_UPDATE_USER = True

# Cache distinguished names and group memberships for an hour to minimize
# LDAP traffic.
AUTH_LDAP_CACHE_TIMEOUT = 3600
