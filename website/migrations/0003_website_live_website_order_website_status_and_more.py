# Generated by Django 4.1.5 on 2023-02-15 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_alter_websiteimage_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='website',
            name='live',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='website',
            name='order',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='website',
            name='status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='website',
            name='website_link',
            field=models.TextField(blank=True),
        ),
    ]