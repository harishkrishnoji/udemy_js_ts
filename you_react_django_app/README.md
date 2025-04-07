# React frontend and Django backend App
https://www.youtube.com/watch?v=c-QsfbznSXI
https://github.com/techwithtim/Django-React-Full-Stack-App/blob/main/backend/api/views.py
## Order of setup
- backend setup using poetry
    - python depencies `asgiref Django django-cors-headers djangorestframework djangorestframework-simplejwt PyJWT pytz sqlparse psycopg2-binary python-dotenv python-ldap django-auth-ldap`
    - start project `django-admin startproject backend`
    - start app `python manage.py startapp api`
    - update settings.py
    - `python manage.py createsuperuser --noinput`
    - `python manage.py runserver`

    JWT - will act as permission or authentication everytime we access a website, between frontend and backend
    - /api/token/
    - /api/token/refresh/

- fronend (React)
    - use vite to create new react project
    ```js
    npm create vite@latest frontend -- --template react
    cd frontend
    npm install axios react-router-dom jwt-decode
    ```
    - delete boilerplate code
        - App.css, index.css, and update App.jsx
    - create few folders pages, styles, components
    - create files .env, constants.js and api.js
    - 
