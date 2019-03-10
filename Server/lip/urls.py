from django.conf.urls import url
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r'users',views.UserViewSet)
# router.register(r'todos',views.TodoViewSet)
# router.register(r'fcmtoken',views.FCMTokenViewSet)

urlpatterns = [
    path('',include(router.urls)),
]