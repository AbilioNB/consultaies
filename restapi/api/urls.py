from django.urls import path, include
from .routers import iesrouter, cursorouter

urlpatterns=[
    path('', include(iesrouter.urls)),
    path('', include(cursorouter.urls))
]