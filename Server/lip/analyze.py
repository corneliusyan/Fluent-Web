import json

def analyze(input,source,time,expected_time=0):
    print(input,source,time,expected_time)
    response = {}
    response['input'] = input
    response['source'] = source
    response['time'] = time
    response['expected_time'] = expected_time
    
    return response