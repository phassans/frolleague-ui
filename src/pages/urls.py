from django.urls import path

from .views import HomePageView, DashboardPageView, step2, step4a, step4b, step5a, step5b, step6a, step6b, CookieView

urlpatterns = [
    path('', HomePageView, name='home'),
    path('dashboard/', DashboardPageView, name='home'),
    path('cookie/<str:user>/<str:token>', CookieView),
    path('ajax/step2/', step2, name='step2'),
    path('ajax/step4a/', step4a, name='step4a'),
    path('ajax/step4b/', step4b, name='step4b'),
    path('ajax/step5a/', step5a, name='step5a'),
    path('ajax/step5b/', step5b, name='step5b'),
    path('ajax/step6a/', step6a, name='step6a'),
    path('ajax/step6b/', step6b, name='step6b'),
]
