# Generated by Django 4.0.3 on 2022-03-25 19:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_chat_messages'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='key',
            new_name='session_key',
        ),
    ]
