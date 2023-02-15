from django.urls import path
from . import views

urlpatterns = [
  path('all/', views.all_websites),
  path('get-website/<int:id>/', views.get_website),
  path('all-reviews/', views.get_reviews),
]