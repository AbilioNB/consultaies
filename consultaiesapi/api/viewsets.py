from rest_framework import viewsets
from api import serializers, models

class cpcviewset(viewsets.ModelViewSet):
    serializer_class = serializers.cpcserializer
    queryset = models.cpcmodel.objects.all()

class igcviewset(viewsets.ModelViewSet):
    serializer_class = serializers.igcserializer
    queryset = models.igcmodel.objects.all()

class enadeviewset(viewsets.ModelViewSet):
    serializer_class = serializers.enadeserializer
    queryset = models.enademodel.objects.all()

class cursoviewset(viewsets.ModelViewSet):
    serializer_class = serializers.cursoserializer
    queryset = models.cursomodel.objects.all()

class iesviewset(viewsets.ModelViewSet):
    serializer_class = serializers.cursoserializer
    queryset = models.iesmodel.objects.all()