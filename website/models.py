from django.db import models

class Website(models.Model):
  title = models.CharField(max_length=255, blank=False)
  long_title = models.TextField(blank=False)
  year = models.IntegerField(blank=False)
  order = models.IntegerField(blank=True, null=True)
  type = models.CharField(max_length=255, blank=False)
  role = models.CharField(max_length=255, blank=False)
  status = models.CharField(max_length=255, blank=True, null=True)
  live = models.BooleanField()
  website_link = models.TextField(blank=True)
  description = models.TextField(blank=False)

  def __str__(self):
    return self.title

class WebsiteImage(models.Model):
  website = models.ForeignKey(Website, related_name='images', on_delete=models.CASCADE)
  image = models.FileField(upload_to='media/website-images', blank=False)

class WebsiteTech(models.Model):
  website = models.ForeignKey(Website, related_name='tech', on_delete=models.CASCADE)
  tech = models.CharField(max_length=255, blank=False)

class Review(models.Model):
  content = models.TextField(blank=False)
  rating = models.DecimalField(blank=False, max_digits=8, decimal_places=1)
  order = models.IntegerField(blank=True, null=True)
  active = models.BooleanField()
  author = models.CharField(max_length=255, blank=False)

  def __str__(self):
    return self.author