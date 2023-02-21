from rest_framework import serializers
from .models import Website, WebsiteTech, WebsiteImage, Review, WebsiteBlurredImage

class WebsiteTechSerializer(serializers.ModelSerializer):
  class Meta:
    model = WebsiteTech
    fields = '__all__'

class WebsiteImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = WebsiteImage
    fields = '__all__'

class WebsiteBlurredImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = WebsiteBlurredImage
    fields = '__all__'

class WebsiteSerializer(serializers.ModelSerializer):
  images = WebsiteImageSerializer(read_only=True, many=True)
  blurred_images = WebsiteBlurredImageSerializer(read_only=True, many=True)
  tech = WebsiteTechSerializer(read_only=True, many=True)

  class Meta:
    model = Website
    fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = '__all__'