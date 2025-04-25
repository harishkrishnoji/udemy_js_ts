# To address bcrypt error
# AttributeError: module 'bcrypt' has no attribute '__about__'

import bcrypt
bcrypt.__about__ = bcrypt