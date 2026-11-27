# Kilele Grand Hotel & Conference Centre

A responsive, six-page website for a fictional full-service hotel in Nairobi, Kenya. It covers accommodation, dining, conference facilities and a spa. This is a portfolio project, built to practise professional front-end development.

**Live demo:** https://bradleymaliro.github.io/hotel-website/

## Pages

- **Home:** hero, booking bar, services, featured rooms, stats, testimonials
- **Rooms & Suites:** filter tabs by room type, six room cards with prices in KES
- **Dining:** venues, tabbed menu (breakfast, lunch, dinner, drinks), table reservation form
- **Conference & Events:** venues, facilities, event types, quote request form
- **Gallery:** category filters and an accessible lightbox
- **Contact:** contact details, message form, map and FAQ

## Built with

- HTML5, with semantic elements
- CSS3, with custom properties, Grid, Flexbox and media queries (no frameworks)
- Vanilla JavaScript (no libraries)
- Playfair Display and Nunito Sans from Google Fonts
- OpenStreetMap embed for the map

## What I focused on

- **Responsive design:** works from small phones to wide desktop screens, with a mobile menu
- **Accessibility:** skip-to-content link, visible keyboard focus, labelled forms, ARIA labels, native `<dialog>` and `<details>` elements, and support for reduced motion
- **Performance:** WebP images, lazy loading, width and height set on images, and no heavy dependencies
- **Security habits:** no inline user input rendered as HTML (`textContent` only), honeypot spam trap on forms, no personal data in URLs, no secrets in the repository

## Project structure

- index.html, rooms.html, dining.html, conference.html, gallery.html, contact.html
- css/style.css
- js/main.js
- images/

## Run it locally

1. Clone the repository.
2. Open the folder in VS Code.
3. Start it with the Live Server extension, or just open `index.html` in a browser.

No build step is needed.

## Notes

- All hotel details, prices, reviews, phone numbers and email addresses are fictional placeholders.
- The forms are demo forms. They validate input but do not send or store anything yet.

## Photo credits

Photos are from [Unsplash](https://unsplash.com) and used under the Unsplash licence. Photographer credits:

- Hero image: _add photographer name_
- Rooms: _add photographer names_
- Dining and bar: _add photographer names_
- Conference and meeting rooms: _add photographer names_
- Spa: _add photographer name_

## Author

Built by Bradley Maliro.