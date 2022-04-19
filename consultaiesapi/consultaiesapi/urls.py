"""consultaiesapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from api import viewsets

cpcroute = routers.DefaultRouter()
cpcroute.register(r'cpc', viewsets.cpcviewset, basename='CPC')
igcroute = routers.DefaultRouter()
igcroute.register(r'igc', viewsets.igcviewset, basename='IGC')
enaderoute = routers.DefaultRouter()
enaderoute.register(r'enade', viewsets.enadeviewset, basename='Conceito ENADE')
cursoroute = routers.DefaultRouter()
cursoroute.register(r'censocurso', viewsets.cursoviewset, basename='Censo Curso')
iesroute = routers.DefaultRouter()
iesroute.register(r'censoies', viewsets.iesviewset, basename='Censo IES')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(cpcroute.urls)),
    path('', include(igcroute.urls)),
    path('', include(enaderoute.urls)),
    path('', include(cursoroute.urls)),
    path('', include(iesroute.urls)),
]