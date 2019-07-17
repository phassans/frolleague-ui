from django.shortcuts import render
import requests
import json
from django.http import JsonResponse
# Create your views here.


def HomePageView(request):
    return render(request, 'pages/index.html', {
    })


def step2(request):
    payload = {'userId': 'fhVq011uDC',
               'linkedInURL': 'https://www.linkedin.com/in/shanth-kumar-harikrishnan-a8915118/'}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/linkedin/url', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# fetching


def step4a(request):
    payload = {'userId': 'fhVq011uDC',
               'company': True}
    response = requests.post(
        ' http://54.67.50.213:8080/v1/user/info', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step4b(request):
    payload = {'userId': 'fhVq011uDC',
               "companies": [
                   {
                       "companyName": "monday",
                       "location": "MTV"
                   }
               ]}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/companies/update', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)


def step5a(request):
    payload = {'userId': 'fhVq011uDC',
               'school': True}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/info', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step5b(request):
    payload = {'userId': 'fhVq011uDC',
               "schools": [
                   {
                       "schoolName": "stanford",
                       "degree": "masters",
                       "fieldOfStudy": "business",
                       "fromYear": 2009,
                       "toYear": 20011
                   }
               ]
               }
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/schools/update', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)


def step6a(request):
    payload = {'userId': 'fhVq011uDC'}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/groups', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step6b(request):
    payload = {'userId': 'fhVq011uDC',
               "group": "eBusinessApplicationSolutions",
               "status": False

               }
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/group/toggle', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)
