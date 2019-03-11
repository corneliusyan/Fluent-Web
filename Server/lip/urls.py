from django.conf.urls import url
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'lessons',views.LessonViewSet)
router.register(r'lectures',views.LectureViewSet)

urlpatterns = [
    path('',include(router.urls)),
]