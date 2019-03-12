import json
import string


def analyze(input, source, time, expected_time=0):
    old_src = source
    input = input.translate(
        str.maketrans('', '', string.punctuation)).lower()
    source = source.translate(
        str.maketrans('', '', string.punctuation)).lower()
    response = {}

    # result calculation
    # wrong words will be marked by *...*
    differences = set(source.split()) - set(input.split())
    result = old_src
    for dif in differences:
        result = result.replace(dif, '*'+dif+'*')
    response['result'] = result
    response['wrong_words'] = list(differences)

    # clarity calculation
    count_src = len(set(source.split()))
    count_differences = len(differences)
    clarity = (count_src-count_differences)/count_src
    response['clarity'] = clarity

    # pace calculation
    # if expected_time wasn't set, replace it with <total words in source>*1 (expected_time = 1 word/second)
    if expected_time == 0:
        expected_time = len(source.split())*1
    if time-expected_time <= 0:
        pace = 1
    elif time-2*expected_time <= 0:
        pace = 1 - (time-expected_time)/expected_time
    else:
        pace = 0
    response['pace'] = round(pace, 2)

    # star calculation
    star = (clarity+pace)/2
    if star < 0.25:
        star = 0
    elif star < 0.5:
        star = 1
    elif star < 0.75:
        star = 2
    else:
        star = 3
    response['star'] = star

    return response
