# app.py
from fastapi import FastAPI, UploadFile, File
from google.cloud import vision
import os
import cv2
import numpy as np

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "credentials.json"

app = FastAPI()

@app.post("/detect-cans")
async def detect_cans(file: UploadFile = File(...)):
    contents = await file.read()
    with open("temp.jpg", "wb") as f:
        f.write(contents)

    # Vision API
    client = vision.ImageAnnotatorClient()
    with open("temp.jpg", "rb") as image_file:
        image = vision.Image(content=image_file.read())
    response = client.object_localization(image=image)
    objects = response.localized_object_annotations
    can_count = sum(1 for obj in objects if "can" in obj.name.lower())

    # Optional: OpenCV enhancement
    img = cv2.imread("temp.jpg")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cv_estimate = len(contours)

    return {"vision_api_cans": can_count, "opencv_estimate": cv_estimate}
