# Helper script to create venv, install requirements and run migrations
try {
    if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
        Write-Error "Python is not found in PATH. Install Python and try again."
        exit 1
    }

    if (-not (Test-Path .\.venv)) {
        Write-Host "Creating virtual environment at .\.venv..."
        python -m venv .\.venv
    } else {
        Write-Host "Virtual environment .\.venv already exists."
    }

    Write-Host "Activating virtual environment..."
    . .\.venv\Scripts\Activate

    Write-Host "Upgrading pip and installing requirements..."
    python -m pip install --upgrade pip
    python -m pip install -r .\requirements.txt

    Write-Host "Running migrations..."
    python manage.py migrate

    Write-Host "Done. To start the dev server run: python manage.py runserver"
} catch {
    Write-Error "An error occurred: $_"
    exit 1
}
