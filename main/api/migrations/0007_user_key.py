# Generated by Django 4.0.3 on 2022-03-23 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_user_key'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='key',
            field=models.CharField(max_length=50, null=True, unique=True),
        ),
    ]
