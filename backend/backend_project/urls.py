from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


def api_root(request):
    return HttpResponse(
        "<h1>swe-backend API</h1><ul>"
        "<li><a href='/admin/'>Admin</a></li>"
        "<li><a href='/api/auth/register/'>Register (POST)</a></li>"
        "<li><a href='/api/auth/token/'>Token (POST)</a></li>"
        "</ul>",
        content_type='text/html',
    )


urlpatterns = [
    path('', api_root, name='api_root'),
    path('admin/', admin.site.urls),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/', include('accounts.urls')),
]
