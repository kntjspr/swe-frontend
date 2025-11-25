Django backend for swe-frontend

Setup (Windows PowerShell):

```powershell
python -m venv venv
.\venv\Scripts\Activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```

API endpoints:
- `POST /api/auth/register/` — JSON {"username","email","password"}
- `POST /api/auth/token/` — JSON {"username","password"} (JWT obtain)
- `POST /api/auth/token/refresh/` — JSON {"refresh"}

Configure the frontend to call the API at `http://localhost:8000`.
