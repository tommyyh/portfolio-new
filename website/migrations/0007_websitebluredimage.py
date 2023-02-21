# Generated by Django 4.1.5 on 2023-02-20 23:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0006_alter_review_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebsiteBluredImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='media/blurred-images')),
                ('website', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blurred_images', to='website.website')),
            ],
        ),
    ]
