# Generated by Django 4.0.3 on 2022-03-26 22:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_message_sent_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='conversation',
            name='group',
        ),
        migrations.RemoveField(
            model_name='conversation',
            name='name',
        ),
        migrations.AddField(
            model_name='conversation',
            name='type',
            field=models.CharField(default='single', max_length=10),
        ),
        migrations.CreateModel(
            name='User_Conversation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('conversation_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.conversation')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
            ],
        ),
    ]
