from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Lesson(models.Model):
    lesson_number = models.IntegerField(default=0)
    title = models.CharField(max_length=100, blank=False)
    rating = models.FloatField(default=5)
    rating_count = models.IntegerField(default=0)
    students_count = models.IntegerField(default=0)
    lectures_count = models.IntegerField(default=0)
    desc = models.TextField(default='')

    class Meta:
        ordering = ('lesson_number',)


class Lecture(models.Model):
    lesson_number = models.IntegerField(blank=False)
    lecture_number = models.IntegerField(blank=False)
    text = models.TextField()
    expected_time = models.IntegerField(blank=False)

    class Meta:
        ordering = ('lesson_number', 'lecture_number',)
