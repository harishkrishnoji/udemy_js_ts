from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from api.models import Note
from django.core.cache import cache


@receiver([post_save, post_delete], sender=Note)
def invalidate_note_cache(sender, instance, **kwargs):
    """
    Invalidate the cache for the Note model when a Note instance is saved or deleted.
    """
    cache_key = f"note_list{instance.id}"
    # cache.delete(cache_key)
    cache.delete_pattern('*note_list*')
    print(f"Cache invalidated for {cache_key}")
