# Generated by Django 4.0.3 on 2022-03-26 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_alter_conversation_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_conversation',
            name='name',
            field=models.CharField(default='Change me', max_length=50),
        ),
    ]
