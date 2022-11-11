from django.conf import settings
from django.db import models
class Product(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    price = models.IntegerField()
    description = models.TextField()
    quantity = models.IntegerField()
    is_valid = models.BooleanField(null=True,blank=True,)
class Review(models.Model):
    'Generated Model'
    title = models.CharField(max_length=255,)
    body = models.TextField()
    points = models.IntegerField()
