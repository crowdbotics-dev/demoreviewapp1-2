# Generated by Django 2.2.28 on 2022-11-15 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlbumInventory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
            ],
        ),
    ]
