### Caching


https://www.django-rest-framework.org/api-guide/caching/

redis
Django Signals: to update cache periodically

```sh
# To pull Redis image from Nexus dev
podman pull fmk.nexus.onefiserv.net/vendor/docker/redis:7.0.9-alpine
# Run container in detach mode and -rm will remove container once it is stopped
podman run --name netsvcs-redis -d -p 6379:6379 --rm fmk.nexus.onefiserv.net/vendor/docker/redis:7.0.9-alpine
podman netsvcs-redis
```
Python client for Redis
https://redis-py.readthedocs.io/en/stable/

```py
poetry add redis[hiredis]
poetry add django-redis
```
By default Django has Redis backend support, but Django-redis provides more adavnce functionality

poetry add django-redis

http://127.0.0.1:8001/api/swagger/
http://127.0.0.1:8001/api/notes/

### Invalidate cache data
using Djnago signals

### To see redis key value pairs
```sh
podman exec -it netsvcs-redis sh
# if we have more than one database in redis, we can pass number
# redis-cli -n 1
redis-cli
# To get list of all the keys (not recommended on prod)
KEYS *
# To get value of specific Key
# GET {key}
get ":1:views.decorators.cache.cache_page.note_list.GET.5338404b995c5eec4796a31515ca3a92.491bc55c72cb61c86b95d0b5f82b5e27.en-us.UTC"
```