# Generated by Django 4.0.3 on 2022-03-26 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_conversation_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='name',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
    ]
