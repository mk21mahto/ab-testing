# Blinkist A-B Testing

This project consist of 2 small app - Mini CMS and Blog

In the project directory, you can run:

## How to test

1. Runs the app in the development mode using 'npm start'
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
3. Make changes to control/test variation (sum should be 100) and click on start. This stores the controlValue and testValue in localstorage
4. Open[http://localhost:3000/blog](http://localhost:3000/blog) to view the blog. Based on the variation you'll see different output. It also tracks the event and store in localStorage.
5. Click on sign up, it keeps a track of interaction (CTR)
6. Visit [http://localhost:3000](http://localhost:3000) again to see the variant count increased.



