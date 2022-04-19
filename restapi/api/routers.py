from rest_framework import routers
from .views import CensoIes_viewset, CensoCurso_viewset

iesrouter=routers.DefaultRouter()
iesrouter.register('ies', CensoIes_viewset)

cursorouter=routers.DefaultRouter()
cursorouter.register('curso', CensoCurso_viewset)