from django.http import HttpResponse
from django.shortcuts import render


def homePage(request):
    data = {"name": "Tetranator"}
    return render(request, 'index.html', data)

def dice(request):
    return render(request, 'dicee.html')

def simon(request):
    return render(request, 'simon.html')

def drum(request):
    return render(request, 'drumindex.html')