# Installation

## First time run
```
pipenv shell
pipenv install
python manage.py migrate
```

## Run
```
pipenv shell
python manage.py runserver
```

# Database Management

## Open SQLite CLI
```
python manage.py dbshell
```

## Check list of tables
```
sqlite> .tables
```


# Sample APIs

### Base URL : localhost:8000  

## Lesson
### Get All Lessons
```
GET '/lessons/'

[
    {
        "id": 1,
        "lesson_number": 1,
        "title": "Introduction",
        "rating": 5.0,
        "rating_count": 100,
        "students_count": 5800,
        "lectures_count": 4,
        "desc": "Welcome to the Introduction lesson! Here, you will get the basic lectures from Cakap. I'm sure you can do it easily!"
    },
    {
        "id": 2,
        "lesson_number": 2,
        "title": "Daily Life",
        "rating": 4.9,
        "rating_count": 100,
        "students_count": 5000,
        "lectures_count": 4,
        "desc": "Welcome to the second lesson. Let's get another enjoyable lectures!"
    }
]
```

## Lecture
### Get All Lectures from Lesson Number
```
GET '/lessons/<lesson_number>/'

[
    {
        "id": 1,
        "lesson_number": 1,
        "lecture_number": 1,
        "text": "I like ice cream.",
        "expected_time": 2
    },
    {
        "id": 2,
        "lesson_number": 1,
        "lecture_number": 2,
        "text": "I really want to study English.",
        "expected_time": 4
    },
    {
        "id": 3,
        "lesson_number": 1,
        "lecture_number": 3,
        "text": "Good morning everyone! Have a nice day!",
        "expected_time": 6
    },
    {
        "id": 4,
        "lesson_number": 1,
        "lecture_number": 4,
        "text": "Goodbye everyone! Good night and have a nice dream!",
        "expected_time": 6
    }
]
```


## Analyze
### Get analysis from input, __expected_time is OPTIONAL__ (*used in __write out loud__ feature*)
```
POST '/analyze/'
{
    "source_text":"I like ice cream.",
    "input_text":"I like is krim.",
    "input_time":7,
    "expected_time":5
}
```
```
Response
{
    "result": "I like *ice* *cream*.",
    "wrong_words": [
        "cream",
        "ice"
    ],
    "clarity": 0.5,
    "pace": 0.6,
    "star": 2
}
```