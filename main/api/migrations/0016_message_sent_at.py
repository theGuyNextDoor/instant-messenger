# Generated by Django 4.0.3 on 2022-03-26 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_conversation_user_id_conversation_group'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='sent_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
