from django.db import models

class Website(models.Model):
  title = models.CharField(max_length=255, blank=False)
  long_title = models.TextField(blank=False)
  year = models.IntegerField(blank=False)
  type = models.CharField(max_length=255, blank=False)
  role = models.CharField(max_length=255, blank=False)
  website_link = models.TextField(blank=False)
  description = models.TextField(blank=False)

  def __str__(self):
    return self.title

class WebsiteImage(models.Model):
  website = models.ForeignKey(Website, related_name='images', on_delete=models.CASCADE)
  image = models.FileField(upload_to='static/images', blank=False)

class WebsiteTech(models.Model):
  website = models.ForeignKey(Website, related_name='tech', on_delete=models.CASCADE)
  tech = models.CharField(max_length=255, blank=False)