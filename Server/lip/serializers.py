from rest_framework import serializers
from lip.models import Lesson, Lecture


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'lesson_number', 'title', 'rating',
                  'rating_count', 'students_count', 'lectures_count','desc')

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ('id','lesson_number','lecture_number','text','expected_time')

# TODO : consider clarity, pacing, etc
# TODO : Consider number of stars response
# TODO : in matching algorithm, do lowercasing, remove punctuations.

