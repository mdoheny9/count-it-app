import cv2
from google.cloud import vision
from google.oauth2 import service_account

# ===== 1. SETUP GOOGLE CLOUD VISION =====
# Make sure this path points to your downloaded JSON credentials
CREDENTIALS_PATH = r"C:\Users\finnd\OneDrive\Desktop\Hackathon\service_account.json"
creds = service_account.Credentials.from_service_account_file(CREDENTIALS_PATH)
client = vision.ImageAnnotatorClient(credentials=creds)

# ===== 2. LOAD AND ENHANCE IMAGE =====
IMAGE_PATH = "cans.jpg"
img = cv2.imread(IMAGE_PATH)

# Improve brightness and contrast for better detection
enhanced = cv2.convertScaleAbs(img, alpha=1.5, beta=40)
cv2.imwrite("cans_enhanced.jpg", enhanced)

# ===== 3. RUN GOOGLE CLOUD VISION OBJECT DETECTION =====
with open("cans_enhanced.jpg", "rb") as f:
    content = f.read()

image = vision.Image(content=content)
response = client.object_localization(image=image)
objects = response.localized_object_annotations

can_objects = [o for o in objects if "can" in o.name.lower()]
print(f"\n🧠 Google Vision detected {len(can_objects)} cans:")
for obj in can_objects:
    print(f"  - {obj.name} ({obj.score:.2f} confidence)")

# ===== 4. FALLBACK: OPENCV CONTOUR COUNTING =====
if len(can_objects) < 5:  # threshold, adjust based on your testing
    print("\n⚙️ Vision detected few cans — using OpenCV fallback...")

    gray = cv2.cvtColor(enhanced, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (7, 7), 0)
    edges = cv2.Canny(blur, 40, 120)

    # Find contours and filter small ones
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    filtered = [c for c in contours if cv2.contourArea(c) > 1200]

    approx_count = len(filtered)
    print(f"🔍 OpenCV estimated about {approx_count} cans based on contour shapes.")
else:
    print("\n✅ Vision detection is sufficient — no fallback needed.")
