# Associative Properties - Website

Welcome to the official website for Associative Properties, a premier design and design management company serving Colorado and Utah. We specialize in creating exceptional spaces that inspire and endure, combining mountain-inspired aesthetics with cutting-edge design principles.

## About Associative Properties

Founded in 2016, Associative Properties has been at the forefront of design innovation across the Rocky Mountain region. Our team brings together expertise in:

- **Interior Design** - Complete design services from concept to completion
- **Architectural Consulting** - Expert guidance for new construction and renovations
- **Project Management** - Comprehensive oversight ensuring on-time, on-budget delivery
- **Creative Direction** - Strategic visual identity and brand development
- **Furniture Design** - Custom pieces that perfectly complement your space
- **Sustainable Design** - Eco-friendly solutions that minimize environmental impact

## Our Approach

We believe in creating designs that honor the natural beauty of the Mountain West while incorporating modern functionality and sustainable practices. Our collaborative process ensures your vision becomes reality through:

1. **Discovery & Consultation** - Understanding your vision and requirements
2. **Concept Development** - Creating initial designs and proposals
3. **Design Refinement** - Refining based on feedback and material selection
4. **Implementation** - Managing the entire construction process
5. **Final Reveal** - Presenting your completed space with ongoing support

## Service Areas

### Colorado
- Denver Metro Area
- Boulder
- Aspen
- Vail
- Breckenridge
- Steamboat Springs

### Utah
- Salt Lake City
- Park City
- Deer Valley
- Sundance
- St. George
- Moab

## Contact Information

- **Studio Location:** 1863 Wazee St, 1A, Denver, CO 80202
- **Phone:** 303-997-1264
- **Email:** hello@associativeproperties.com
- **Studio Hours:** Mon-Fri: 9AM-6PM, Sat: 10AM-4PM

## Website Features

This modern, responsive website showcases our work and services with:

### Design Elements
- **Sophisticated Color Palette** - Deep forest green, sage green, and warm taupe
- **Modern Typography** - Inter and Playfair Display fonts for optimal readability
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Subtle interactions that enhance user experience

### Technical Features
- **Fixed Navigation** - Easy access to all sections
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Forms** - Contact form with validation and notifications
- **Mobile-First Design** - Optimized for smartphones and tablets
- **Performance Optimized** - Fast loading times and smooth interactions

### Sections
1. **Hero Section** - Compelling introduction with call-to-action buttons
2. **About** - Company story and key differentiators
3. **Services** - Comprehensive service offerings with detailed descriptions
4. **Process** - Step-by-step design methodology
5. **Contact** - Multiple ways to get in touch and start your project

## Development

### Quick Start

#### Option 1: Simple HTTP Server (Recommended for most users)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

#### Option 2: Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Automatically opens in browser with live reload

#### Option 3: Browser-Sync (Advanced)
```bash
# Install browser-sync globally
npm install -g browser-sync

# Start development server with live reload
browser-sync start --server --files "*.html, *.css, *.js" --port 3000
```

#### Option 4: Custom Development Script
Create a `package.json` file for npm scripts:
```json
{
  "name": "associative-properties",
  "version": "1.0.0",
  "scripts": {
    "dev": "python3 -m http.server 8000",
    "dev-node": "npx http-server -p 8000",
    "dev-browser-sync": "browser-sync start --server --files '*.html, *.css, *.js' --port 3000",
    "dev-live": "live-server --port=8000 --open=/index.html"
  },
  "devDependencies": {
    "browser-sync": "^2.29.3",
    "live-server": "^1.2.2"
  }
}
```

Then run:
```bash
npm install
npm run dev
```

### Development Tools

#### Code Editor Setup
- **VS Code Extensions**:
  - Live Server
  - HTML CSS Support
  - CSS Peek
  - Auto Rename Tag
  - Bracket Pair Colorizer
  - Prettier - Code formatter

#### Browser Developer Tools
- **Chrome DevTools**: Press F12 or right-click → Inspect
- **Firefox Developer Tools**: Press F12 or right-click → Inspect Element
- **Safari Web Inspector**: Develop → Show Web Inspector

#### Testing Checklist
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Test responsive breakpoints (768px, 480px)
- [ ] Verify all links work correctly
- [ ] Test contact form validation
- [ ] Check loading performance
- [ ] Validate HTML/CSS

### File Structure

```
associative-properties/
├── index.html          # Main website file
├── style.css           # Comprehensive styling with CSS custom properties
├── script.js           # Interactive features and animations
├── images/
│   └── logo.png        # Company logo
├── README.md           # This file
├── CNAME              # Custom domain configuration
└── package.json        # Development dependencies (optional)
```

### Development Workflow

1. **Setup Development Environment**
   ```bash
   git clone <repository-url>
   cd associative-properties
   # Choose one of the server options above
   ```

2. **Make Changes**
   - Edit HTML in `index.html`
   - Modify styles in `style.css`
   - Update functionality in `script.js`
   - Add images to `images/` folder

3. **Preview Changes**
   - Browser will auto-reload with live server
   - Test on different screen sizes
   - Use browser dev tools for debugging

4. **Deploy**
   - Upload files to your hosting provider
   - Update DNS settings if using custom domain
   - Test live site functionality

### Troubleshooting

#### Common Issues
- **CORS Errors**: Use a local server instead of opening file directly
- **Font Loading Issues**: Check internet connection for Google Fonts
- **JavaScript Errors**: Check browser console for debugging
- **Mobile Testing**: Use browser dev tools device simulation

#### Performance Tips
- Optimize images before adding to `images/` folder
- Minify CSS/JS for production
- Enable gzip compression on server
- Use CDN for external resources

## How to Use

### For Visitors
1. **Learn About Services** - Review our comprehensive service offerings
2. **Understand Our Process** - See how we bring your vision to life
3. **Get in Touch** - Use the contact form or call us directly to start your project

### For Developers
1. Clone this repository
2. Choose a development server option from above
3. Open `index.html` in your browser to view the site
4. Customize colors, content, and functionality as needed
5. Deploy to your preferred hosting platform

## Design System

### Color Palette
- **Primary:** #2C5530 (Deep Forest Green)
- **Secondary:** #8B9D83 (Sage Green)
- **Accent:** #D4A574 (Warm Taupe)
- **Neutral Dark:** #2C2C2C (Charcoal)
- **Neutral Light:** #F8F9FA (Off White)
- **Neutral Medium:** #6C757D (Medium Gray)

### Typography
- **Primary Font:** Inter (Sans-serif)
- **Display Font:** Playfair Display (Serif)
- **Responsive sizing** using clamp() for optimal readability

### Spacing & Layout
- **Container max-width:** 1200px
- **Section padding:** 80px vertical
- **Border radius:** 12px
- **Box shadows** for depth and elevation

## Browser Support

This website is built with modern web standards and supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for:
- **Fast loading times** with minimal external dependencies
- **Smooth animations** using CSS transforms and transitions
- **Responsive images** (placeholder system ready for real images)
- **Accessibility** with proper semantic HTML and ARIA labels

## Future Enhancements

Planned features for future updates:
- **Blog Section** - Design tips and project insights
- **Client Portal** - Secure area for project updates
- **Online Booking** - Schedule consultations directly
- **Testimonials** - Client feedback and reviews
- **Social Media Integration** - Instagram and Pinterest feeds

## License

This website is proprietary to Associative Properties. All rights reserved.

---

*Creating exceptional spaces across Colorado and Utah with passion, precision, and mountain-inspired design.*
