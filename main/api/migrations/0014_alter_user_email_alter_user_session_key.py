# Generated by Django 4.0.3 on 2022-03-26 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_conversation_message_remove_messages_room_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='session_key',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
