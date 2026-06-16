# Erica Saffron, Portfolio

Personal portfolio website. Pure HTML + CSS + vanilla JS. No frameworks, no build tools, no dependencies.

## Structure

```
ericasaffron/
├── index.html                     # Home
├── portfolio.html                 # Case studies listing (filterable grid)
├── about.html                     # About
├── contact.html                   # Contact, Web3Forms + hCaptcha
├── kindness-box.html              # Case study: The Kindness Box
├── information-architecture.html  # Case study: Information Architecture, Skincare Website
├── participatory-design.html      # Case study: The Magical Farm Workshop
├── css/
│   └── style.css                  # All styles (shared across every page)
├── js/
│   └── nav.js                     # Mobile nav toggle
├── images/                        # All images used across the site
└── README.md
```

## Case studies on the portfolio page

The `portfolio.html` grid currently shows, in order:

| Project | Category | Links to |
|---|---|---|
| FIFA Heros | UI/UX | playfifaheroes.com |
| Warped Kart Racers for Apple Vision Pro | UI/UX, Mixed Reality | livelystudio.com |
| Warped Kart Racers (iOS) | UI/UX | electricsquare.com |
| Need for Speed Unbound | UI/UX, Vector Graphics | electricsquare.com |
| The Kindness Box | UX Research, Interaction Design, Prototyping | `kindness-box.html` |
| Information Architecture: Skincare Website | UX Research, Information Architecture | `information-architecture.html` |
| Magical Farm Workshop | UX Research, Participatory Design | `participatory-design.html` |
| Dr. Barker's | Graphic Design, Packaging | ArtStation |
| World Cities | Graphic Design, Poster Design | ArtStation |
| Totoro Poster | Graphic Design, Illustration | ArtStation |

Cards can be filtered by category (All, UX Research, Interaction Design, UI/UX, Graphic Design) using the filter bar at the top of the page.

## Images

All images currently referenced by the site live in `images/`, including thumbnails for the project cards, the about page portrait, and the figures used inside each case study (domain model, sitemap, user journeys, wireframes, personas, and the Kindness Box prototype shots). Cards degrade gracefully, the coloured background shows if an image fails to load.

## Hosting

### GitHub Pages
1. Push to a repo named `ericasaffron.github.io` (or any repo, then enable Pages in Settings → Pages → Deploy from branch `main`)
2. That's it, no build step needed.

### Custom domain (e.g. ericasaffron.com)
1. Add a `CNAME` file in the repo root containing just: `ericasaffron.com`
2. In your DNS settings, add:
   - `A` record → `185.199.108.153` (and .109, .110, .111)
   - or `CNAME` → `your-username.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings.

## Contact form

The contact form on `contact.html` submits to Web3Forms and is protected with hCaptcha. It validates the subject and message fields before sending, and shows a 30-second cooldown after a successful submission. Configuration (access key and hCaptcha site key) lives directly in the page.

## Customisation

- All design tokens (colours, fonts, spacing) are CSS variables at the top of `style.css`
- To change the accent colour, update `--black` / add a new variable
- Case study pages share the same CSS, add new ones by copying any existing case study HTML file
