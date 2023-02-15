from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Website, Review
from .serializers import WebsiteSerializer, ReviewSerializer

@api_view(['GET'])
def all_websites(request):
  websites = Website.objects.all().order_by('order')
  serializer = WebsiteSerializer(websites, many=True)

  return Response({ 'status': 200, 'data': serializer.data })

@api_view(['GET'])
def get_website(request, id):
  website = Website.objects.get(id=id)
  serializer = WebsiteSerializer(website)

  return Response({ 'status': 200, 'data': serializer.data })

@api_view(['GET'])
def get_reviews(request):
  review = Review.objects.filter(active=True).order_by('order')
  serializer = ReviewSerializer(review, many=True)

  return Response({ 'status': 200, 'data': serializer.data })