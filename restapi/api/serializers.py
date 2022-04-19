from rest_framework import serializers
from .models import CensoCurso, CensoIes, Igc, Cpc, Enade

class CensoIes_serializer(serializers.ModelSerializer):
    class Meta:
        model=CensoIes
        fields='__all__'

class CensoCurso_serializer(serializers.ModelSerializer):
    class Meta:
        model=CensoCurso
        fields='__all__'
