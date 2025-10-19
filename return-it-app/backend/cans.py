import cv2
from google.cloud import vision
from google.oauth2 import service_account
import numpy as np

CREDENTIALS_PATH = r"C:\Users\finnd\Documents\Hackathon\return-it-app\return-it-app\backend\service_account.json"
creds = service_account.Credentials.from_service_account_file(CREDENTIALS_PATH)
client = vision.ImageAnnotatorClient(credentials=creds)

def detect_cans_from_bytes(image_bytes: bytes):
    # Convert bytes to OpenCV image
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Enhance image
    enhanced = cv2.convertScaleAbs(img, alpha=1.5, beta=40)

    # Convert to grayscale and detect edges
    gray = cv2.cvtColor(enhanced, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (7, 7), 0)
    edges = cv2.Canny(blur, 40, 120)
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours by area and aspect ratio
    filtered = []
    for c in contours:
        area = cv2.contourArea(c)
        if area > 1200:
            x, y, w, h = cv2.boundingRect(c)
            aspect_ratio = float(w) / h
            if 0.5 < aspect_ratio < 2.0:  # Roughly cylindrical shapes
                filtered.append(c)

    # Use Vision API on the full image instead of cropped regions
    full_image_bytes = cv2.imencode('.jpg', img)[1].tobytes()
    vision_img = vision.Image(content=full_image_bytes)
    response = client.object_localization(image=vision_img)
    objects = response.localized_object_annotations

    # Match broader object names
    can_like_keywords = ["can", "aluminum", "metal", "container", "soda", "drink", "beverage", "bottle"]
    vision_count = sum(
        1 for o in objects if any(keyword in o.name.lower() for keyword in can_like_keywords)
    )

    cv_estimate = len(filtered)
    return {
        "vision_api_cans": vision_count,
        "opencv_estimate": cv_estimate
    }