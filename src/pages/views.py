from django.shortcuts import render
import requests
import json
from django.http import JsonResponse
# Create your views here.


def HomePageView(request):
    return render(request, 'pages/index.html', {
    })


def step2(request):
    userid = request.POST['userid']
    url = request.POST['url']
    payload = {'userId': userid,
               'linkedInURL': url}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/linkedin/url', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# fetching


def step4a(request):
    userid = request.POST['userid']
    payload = {'userId': userid,
               'company': True}
    response = requests.post(
        ' http://54.67.50.213:8080/v1/user/info', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step4b(request):
    userid = request.POST['userid']
    companies = request.POST['companies']
    print("companies are")
    companies = json.loads(companies)
    print(companies)
    payload = {'userId': userid,
               "companies": companies}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/companies/update', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)


def step5a(request):
    userid = request.POST['userid']
    payload = {'userId': userid,
               'school': True}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/info', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step5b(request):
    userid = request.POST['userid']
    schools = request.POST['schools']
    print("schools are")
    schools = json.loads(schools)
    print(schools)
    payload = {'userId': userid,
               "schools": schools
               }
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/schools/update', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)


def step6a(request):
    userid = request.POST['userid']
    payload = {'userId': userid}
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/groups', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)

# updating


def step6b(request):
    userid = request.POST['userid']
    group = request.POST['group']
    status = request.POST['status']
    if status == "true":
        status = True
    else:
        status = False
    payload = {'userId': userid,
               "group": group,
               "status": status

               }
    response = requests.post(
        'http://54.67.50.213:8080/v1/user/group/toggle', data=json.dumps(payload))
    print(response.text)
    return JsonResponse(response.text, safe=False)
