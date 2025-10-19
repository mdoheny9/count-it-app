# cans.py
import cv2
from google.cloud import vision
from google.oauth2 import service_account
import numpy as np

CREDENTIALS_PATH = r"C:\Users\finnd\Documents\Hackathon\return-it-app\return-it-app\backend\service_account.json"
creds = service_account.Credentials.from_service_account_file(CREDENTIALS_PATH)
client = vision.ImageAnnotatorClient(credentials=creds)

def detect_cans_from_bytes(image_bytes: bytes):
    """Detect cans using Google Vision + OpenCV fallback."""
    # Convert bytes to OpenCV image
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Enhance image
    enhanced = cv2.convertScaleAbs(img, alpha=1.5, beta=40)

    # --- Google Vision ---
    vision_img = vision.Image(content=cv2.imencode('.jpg', enhanced)[1].tobytes())
    response = client.object_localization(image=vision_img)
    objects = response.localized_object_annotations
    can_objects = [o for o in objects if "can" in o.name.lower()]
    vision_count = len(can_objects)

    # --- OpenCV fallback ---
    gray = cv2.cvtColor(enhanced, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (7, 7), 0)
    edges = cv2.Canny(blur, 40, 120)
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    filtered = [c for c in contours if cv2.contourArea(c) > 1200]
    cv_estimate = len(filtered)

    return {
        "vision_api_cans": vision_count,
        "opencv_estimate": cv_estimate
    }
