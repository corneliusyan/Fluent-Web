## Test server at https://lipserver.herokuapp.com

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

## Testing
```
pipenv shell
python manage.py test
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
