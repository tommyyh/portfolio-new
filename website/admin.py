from django.contrib import admin
from .models import Website, WebsiteImage, WebsiteTech

# Register your models here.
class WebsiteImageInline(admin.TabularInline):
  model = WebsiteImage
  extra = 1

class WebsiteTechInline(admin.TabularInline):
  model = WebsiteTech
  extra = 1

class WebsiteAdmin(admin.ModelAdmin):
  inlines = [ WebsiteImageInline, WebsiteTechInline ]

admin.site.register(Website, WebsiteAdmin)