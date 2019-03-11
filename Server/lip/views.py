from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework import renderers
from rest_framework import viewsets
from lip.models import Lesson, Lecture
from lip.serializers import LessonSerializer, LectureSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from django.core import serializers
import json


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def retrieve(self, request, pk):
        instance = self.get_object()
        serialized_data = LessonSerializer(instance=instance).data
        lesson_number = serialized_data['lesson_number']
        res = [LectureSerializer(instance=lecture).data for lecture in Lecture.objects.filter(lesson_number=lesson_number)]
        return Response(res)


class LectureViewSet(viewsets.ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer


# TODO : get lecture list by lesson number, Compare algorithm (string,lecture_id -> result),
#        write out loud (text,text -> result)
