# Generated by Django 4.2.7 on 2023-11-06 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='画像'),
        ),
        migrations.AddField(
            model_name='post',
            name='skill_level',
            field=models.SmallIntegerField(default=0, verbose_name='スキルレベル'),
        ),
    ]
