# Space Zone Defence — Website

React + Vite + Bootstrap 5 site. Pages: Home, Defence, About, Careers, Contact.
All copy is **placeholder** until the content team supplies the final text.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## Where to edit

| What | File |
| --- | --- |
| Company details, nav, all page copy, job openings | `src/data/site.js` |
| Brand colours (accent, background) | top of `src/styles/theme.css` (`:root`) |
| Logo mark | `src/components/Navbar.jsx` (`Logo`) and `public/images/logo.svg` |

## Images

Drop files into `public/images/` with these names (missing files show a gradient placeholder):

`hero.jpg`, `defence-hero.jpg`, `defence-split.jpg`, `about-hero.jpg`, `about-split.jpg`, `careers-hero.jpg`, `contact-hero.jpg`

## Team split

- Person A: `src/pages/Home.jsx`, `src/pages/Careers.jsx`
- Person B: `src/pages/About.jsx`, `src/pages/Contact.jsx`
- Shared: `src/components/*`, `src/data/site.js`, `src/styles/theme.css`

## Forms (PHP)

Contact and Careers post to `public/api/contact.php` and `public/api/careers.php`
(copied into `dist/api` on build). Edit `public/api/config.php` with the real
recipient, sender mailbox and allowed origin.

- Production: serve the built site and `/api` from the same host (cPanel `public_html`).
- Local dev: run Apache/PHP (XAMPP) and set `VITE_API_BASE` in `.env`,
  e.g. `VITE_API_BASE=http://localhost/spacezone-defence/dist/api`
- Resumes are saved with random names to `career_uploads/` (outside `public_html` when possible).

## Deploy (cPanel)

1. `npm run build`
2. Upload the contents of `dist/` to `public_html`.
3. Add an `.htaccess` for SPA routing:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule . /index.html [L]
```
