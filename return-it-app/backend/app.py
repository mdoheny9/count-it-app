# app.py
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from cans import detect_cans_from_bytes

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Can detection API is running 🚀"}

@app.post("/count-cans/")
async def detect_cans(file: UploadFile = File(...)):
    image_bytes = await file.read()
    result = detect_cans_from_bytes(image_bytes)
    return JSONResponse(result)
