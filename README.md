# Associative Properties - Website

Modern, responsive website for Associative Properties, built with **Astro** and deployed on GitHub Pages.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build & Preview

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Commit your changes
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions will automatically build and deploy
# Check the "Actions" tab in GitHub to monitor deployment
```

### First-Time GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push

## 📧 Contact Form - IMPORTANT SETUP REQUIRED

The contact form uses **FormSubmit.co** (free service) to send emails directly to your inbox. **No backend server needed!**

### ⚠️ FIRST TIME SETUP (Required)

**The form will NOT work until you complete this one-time setup:**

1. **Fill out the contact form** on your live website (or localhost)
2. **Check the inbox** of `hello@associativeproperties.com`
3. **Click the verification link** in the email from FormSubmit
4. **Done!** All future form submissions will now arrive in your inbox automatically

**Note:** You only need to do this ONCE. After verification, the form will work forever.

### How It Works

- When someone submits the form, FormSubmit sends you an email with all the details
- The email will be formatted as a nice table with: Name, Email, Phone, Service, and Message
- You'll receive emails at: `hello@associativeproperties.com`

### What Happens After Submission?

When a user submits the form:
1. **FormSubmit processes it** and sends you an email
2. **User is redirected back** to your site at `#contact-success`
3. **Thank you message appears** with a checkmark icon
4. **Form is hidden** and replaced with the success message
5. User can click "Send Another Message" to submit again

### Form Features

- **Autocomplete enabled**: Browser will suggest saved name, email, and phone
- **Email validation**: Checks format on blur and before submit
- **Phone formatting**: Auto-formats as `(XXX) XXX-XXXX` as you type
- **E.164 conversion**: Phone sent as `+1XXXXXXXXXX` in a hidden field
- **Spam protection**: Honeypot field prevents bot submissions
- **Loading state**: Button shows "Sending..." during submission

### Testing Locally

You can test the form on `http://localhost:4321`:
1. Fill out the form
2. Submit it
3. After FormSubmit verification, you'll be redirected back
4. See the success message appear

**Note:** For local testing, the redirect will go to the production URL. You can change `_next` value to `http://localhost:4321/#contact-success` for local testing.

### Changing the Email Address

To send submissions to a different email:

1. Open `src/components/Contact.astro`
2. Find: `action="https://formsubmit.co/hello@associativeproperties.com"`
3. Replace with your email: `action="https://formsubmit.co/your-email@example.com"`
4. Save and deploy
5. Submit a test form to trigger the verification email for the new address

## 📁 Project Structure

```
associative-properties-website/
├── public/
│   ├── images/
│   │   └── logo.png           # Company logo
│   └── CNAME                  # Custom domain configuration
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── Process.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base HTML layout with styles
│   └── pages/
│       └── index.astro        # Main page (imports all components)
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
├── astro.config.mjs           # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Technology Stack

- **Astro** - Modern static site framework
- **No runtime JavaScript** - Pure HTML/CSS with minimal JS for interactions
- **FormSubmit** - Contact form email handling (no backend needed)
- **GitHub Pages** - Free hosting with automatic deployment
- **GitHub Actions** - Automated build and deploy pipeline

## ✨ Key Features

- **Component-Based** - Modular, reusable Astro components
- **Fast Performance** - Static HTML generation, minimal JavaScript
- **Responsive Design** - Mobile-first, works on all devices
- **Working Contact Form** - Email submissions via FormSubmit
- **Modern UI** - Smooth animations and contemporary design
- **Accessible** - Semantic HTML and keyboard navigation
- **SEO Friendly** - Proper meta tags and sitemap generation
- **Auto-deployment** - Push to main branch, automatically deploys

## 🎨 Customization

### Update Content

Edit the Astro components in `src/components/`:
- **Hero.astro** - Homepage hero section
- **About.astro** - About section content
- **Services.astro** - Services list (edit the `services` array)
- **Process.astro** - Design process steps
- **Contact.astro** - Contact information and form
- **Footer.astro** - Footer links and info

### Update Styles

Global styles are in `src/layouts/BaseLayout.astro`:
- CSS variables for colors, fonts, spacing
- Component-specific styles are in each `.astro` file

### Update Colors

Edit CSS variables in `BaseLayout.astro`:

```css
:root {
    --primary-color: #1a3a2e;
    --accent-color: #c9a770;
    /* ... more variables */
}
```

### Update Contact Info

In `src/components/Contact.astro` and `src/components/Footer.astro`:
- Phone: Search for `tel:3039971264`
- Email: Search for `hello@associativeproperties.com`

### Add Images

Place images in the `public/images/` directory. Reference them in components:

```astro
<img src="/images/your-image.jpg" alt="Description">
```

## 🧪 Testing

### Local Testing

```bash
# Start dev server
npm run dev

# Build and preview production
npm run build
npm run preview
```

### Testing Checklist

- [ ] Test contact form submission
- [ ] Verify responsive design (mobile/tablet/desktop)
- [ ] Check all navigation links work
- [ ] Test on Chrome, Firefox, Safari
- [ ] Validate form with empty/invalid inputs
- [ ] Verify phone and email links work
- [ ] Check all animations and transitions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Astro cache
rm -rf .astro dist
npm run build
```

### Form Not Sending Emails

1. Check that you've verified the email with FormSubmit (check inbox/spam)
2. Verify the form action URL is correct in `Contact.astro`
3. Ensure JavaScript is enabled in the browser
4. Check browser console for errors

### Deployment Issues

1. Check the **Actions** tab on GitHub for error logs
2. Verify GitHub Pages is configured to use **GitHub Actions** (not branch)
3. Make sure the repository is public (or you have GitHub Pro for private repos)
4. Check that `astro.config.mjs` has the correct `site` URL

### CNAME / Custom Domain

If using a custom domain:
1. Ensure `public/CNAME` contains your domain
2. Configure DNS records with your domain registrar
3. Wait for DNS propagation (can take up to 48 hours)

## 📝 Development Notes

### Why Astro?

- **Zero JS by default** - Ships pure HTML/CSS, adds JS only when needed
- **Component islands** - Can use React/Vue/Svelte components if needed
- **Fast builds** - Optimized for static sites
- **Great DX** - Modern developer experience with hot reload
- **Perfect for GitHub Pages** - Generates static HTML, no server needed

### Old Files

The original HTML/CSS/JS files are still in the root directory:
- `index.html` (old)
- `style.css` (old)
- `script.js` (old)

These can be safely deleted after confirming the Astro site works.

## 📄 License

Proprietary - All rights reserved by Associative Properties.

---

**Contact:** hello@associativeproperties.com | (303) 997-1264

Built with ❤️ using Astro

## Brand

The logo is a solid geometric "A" with a flat summit, held in parentheses: a nod to the Rockies and to the associative property, (a + b) + c = a + (b + c). In the site header it animates once on load (the peak rises summit-first out of a ground line, then the parentheses close in); everywhere else it is static. The animated version lives in `src/components/Logo.astro` (`animate` prop).

Logo files live in `public/brand/`:

- `mark.svg`, `mark-reversed.svg`: the symbol alone, for light and dark backgrounds
- `logo-horizontal.svg`, `logo-horizontal-reversed.svg`: symbol with one-line wordmark
- `logo-stacked.svg`, `logo-stacked-reversed.svg` (+ `.png`): symbol with two-line wordmark
- `icon.svg`, `icon-512.png`: app icon on a spruce tile (also used for the favicon)

Palette: spruce `#1E3B34`, granite `#22272B`, snow `#F1F4F3`, alpenglow rose `#C9506A` / `#EE93A5` on dark.
Type: Bricolage Grotesque (display and wordmark) and Newsreader (body).

## llms.txt

`public/llms.txt` gives language models a plain-text summary of the firm, services, process, and contact details, following the [llms.txt](https://llmstxt.org) format. Update it when services or contact details change.
