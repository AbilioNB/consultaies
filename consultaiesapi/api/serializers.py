from rest_framework import serializers
from api import models

class cpcserializer(serializers.Serializer):
    class Meta:
        model = models.cpcmodel
        fields = '__all__'

class igcserializer(serializers.Serializer):
    class Meta:
        model = models.igcmodel
        fields = '__all__'

class enadeserializer(serializers.Serializer):
    class Meta:
        model = models.enademodel
        fields = '__all__'

class cursoserializer(serializers.Serializer):
    class Meta:
        model = models.cursomodel
        fields = '__all__'

class iesserializer(serializers.Serializer):
    class Meta:
        model = models.iesmodel
        fields = '__all__'