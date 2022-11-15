from django.contrib import admin
from .models import AlbumInventory,Product,Review
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(AlbumInventory)

# Register your models here.
