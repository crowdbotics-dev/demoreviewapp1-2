# Generated by Django 2.2.28 on 2022-11-15 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_albuminventory'),
    ]

    operations = [
        migrations.AddField(
            model_name='albuminventory',
            name='number_of_tracks',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]