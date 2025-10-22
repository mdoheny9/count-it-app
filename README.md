# Count-It-App

Count-It is a simple, intuitive app designed to help users keep track of their cans and bottles while estimating the money they can earn by recycling. Whether you’re collecting for fun, fundraising, or sustainability, Count-It makes the process easy and efficient.

## Features

- Manual Input: Quickly log the number of cans you have by entering them manually.
- Photo Counting: Take a picture of a bundle of cans, and Count-It will calculate the quantity for you using image recognition
- Earnings Estimation: See how much money you'll make when you deposit your cnas ta the local recyling depot
- History: See all past logs, organized by date, with money total for each day

## How it works

Count-It uses a AI-powered image recognition to automatically count the cans in your photos and estimate recycling earnings.

1. Image Upload:
   Users start by taking or uploading a photo of their bundle of cans.
2. OpenCV Processing:
   Using OpenCV, the backend enhances the image for better visability by converting it to grayscale, reducing noise, and detecting edges and contours-- producing the OpenCV-based can count.
3. Google Vision AI
   The full image is additionally sent to Google's Vision AI
   The AI identifies objects in the image and matches them against a list of "can-like" keywords such as can, aluminum, soda, drink, or bottle.
   This produces a Vision API estimate of the can count.
4. Final Count:
   A combined algorithm (in development) will merge results from both the OpenCV and Google Vision AI analyses to produce a more accurate final count.
5. Earnings Calculations:
   Based on the final can count, Count-It calculates the estimated deposit refund a user would earn at their local recycling depot.

## Installation/Setup
Coming soon 🤫