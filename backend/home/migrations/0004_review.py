# Generated by Django 2.2.28 on 2022-11-11 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_product_is_valid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('body', models.TextField()),
                ('points', models.IntegerField()),
            ],
        ),
    ]
