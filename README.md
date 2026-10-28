# Jolawt Digital Card

A static digital business card: a flipping front/back card, a QR code to the website, and contact details. Plain HTML, CSS and JS, with no build step.

## Run locally

```sh
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Set the framework preset to **Other** and leave the build command and output directory empty.
4. Click **Deploy**.

## Files

- `index.html`: markup
- `styles.css`: styles
- `script.js`: card flip logic
- `images/`: card front and back (1400×800)
- `vercel.json`: long-lived caching for images
