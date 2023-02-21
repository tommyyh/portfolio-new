from django.contrib import admin
from .models import Website, WebsiteImage, WebsiteTech, Review, WebsiteBlurredImage

# Register your models here.
class WebsiteImageInline(admin.TabularInline):
  model = WebsiteImage
  extra = 1

# Register your models here.
class WebsiteBlurredImageInline(admin.TabularInline):
  model = WebsiteBlurredImage
  extra = 1

class WebsiteTechInline(admin.TabularInline):
  model = WebsiteTech
  extra = 1

class WebsiteAdmin(admin.ModelAdmin):
  inlines = [ WebsiteImageInline, WebsiteBlurredImageInline, WebsiteTechInline ]

admin.site.register(Website, WebsiteAdmin)
admin.site.register(Review)