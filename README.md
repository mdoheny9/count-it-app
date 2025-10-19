# count-it-app

Count-It is a simple, intuitive app designed to help users keep track of their cans and bottles while estimating the money they can earn by recycling. Whether you’re collecting for fun, fundraising, or sustainability, Count-It makes the process easy and efficient.

# features

- Manual Input: Quickly log the number of cans you have by entering them manually.
- Photo Counting: Take a picture of a bundle of cans, and Count-It will calculate the quantity for you using image recognition
- Earnings Estimation: See how much money you'll make when you deposit your cnas ta the local recyling depot
- History: See all past logs, organized by date, with money total for each day

# how it works

Count-it uses a combination of smart image processing and Google Vision AI to automatically count the cans in your photos.

1. Image Upload:
   You take a photo of your bundle of cans, and the app converts it into a format it can analyze.
2. OpenCV Processing:
   The app enhances the image for better visibility.
   It converts the photo to grayscale, smooths out noise, and detects edges.
   Contours are identified and filtered to focus on roughly cylindrical objects that look like cans
   This gives an OpenCV-based estimate of how many cans are in the photo.
3. Google Visian AI
   The full image is also sent to Google's Vision AI
   The AI identifies objects in the image and matches them agains a list of "can-like" keywords such as can, aluminim, soda, drink, or bottle.
   This produces a Vision API estimate of the can count.
4. Final Count:
   to be detremined
5. Earnings Calculations:
   Based on the total can count, Count-It calculates how much money you'll earn at your local recycling depot.
