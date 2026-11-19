# Mauli Momo House — simple public website

This is a static, mobile-first website. It does not use Flask, a database, customer accounts, admin login, or a paid database service.

## Run locally

1. Extract the ZIP folder.
2. Open the extracted `mauli_momo_simple` folder in VS Code.
3. Open `index.html` in a browser. For best local testing, use the VS Code Live Server extension and choose **Open with Live Server**.

## Menu updates

Edit `menu.json` to change item names, descriptions, categories, preparations, or displayed prices. Keep valid JSON syntax. The momo prices currently say **Ask for current price** because the uploaded project ZIP did not contain the live database with the saved momo prices. The four fixed prices included here were supplied earlier: Veg Sha Phaley ₹60, Chicken Sha Phaley ₹80, Veg Thukpa ₹150, Chicken Thukpa ₹180.

## Add the shop's real food photos

The ZIP supplied for the update contained empty `images/food` and `uploads` folders, not the actual food photographs. Add shop-approved/licensed photos in `assets/images/`, then the cards and hero can be updated to use them. Do not use photos from Google unless you have permission or a suitable licence.

## Shop details currently shown

- Mauli Momo House
- 90 Feet Rd, opp. Kishor Park, next to Mr praji, Parsik Nagar, Kalwa, Thane, Maharashtra 400605
- Phone / WhatsApp: 09653342288
- Tuesday–Sunday: 6:30 PM–9:30 PM; Monday closed
- Pickup only

## Free hosting

This static folder can be deployed to a static hosting service such as GitHub Pages or Vercel. No server or database is required. A custom domain may cost extra.
