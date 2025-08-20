# Kalash Kankaria - Personal Website

A modern, responsive personal website showcasing Machine Learning engineering expertise. Built with vanilla HTML/CSS/JavaScript for optimal performance and zero dependencies.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with professional typography
- **Dark Theme Default**: Starts in dark mode with toggle to light mode
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Lighthouse-friendly with fast loading times
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Accessible**: WCAG AA compliant with proper semantic HTML
- **Dynamic Content**: JSON-driven content for easy updates
- **Contact Form**: Integrated with Formspree (with mailto fallback)

## 📁 Project Structure

```
personal_website/
├── index.html              # Main HTML file
├── assets/
│   ├── headshot.jpg        # Profile photo (placeholder)
│   └── favicon.ico         # Site icon (placeholder)
├── css/
│   └── styles.css          # All styles with CSS variables
├── js/
│   └── main.js             # Interactive functionality
├── data/
│   └── content.json        # Structured content data
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── README.md               # This file
└── Deploy.md               # Deployment instructions
```

## 🛠 Technical Implementation

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern features including Grid, Flexbox, CSS Variables
- **Vanilla JavaScript**: ES6+ with no external dependencies
- **JSON**: Structured data for easy content management

### Key Features
- CSS Variables for consistent theming (dark mode default)
- Intersection Observer for lazy loading
- localStorage for theme persistence
- Debounced scroll events for performance
- Responsive images with srcset (ready)
- Structured data (JSON-LD) for SEO

### Performance Optimizations
- Deferred JavaScript loading
- Optimized CSS (mobile-first)
- Minimal HTTP requests
- Compressed and optimized assets
- Smooth scrolling with reduced motion support

## 🎨 Design System

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #64748b (Gray)
- **Accent**: #06b6d4 (Cyan)
- **Background Dark**: #0f172a / #1e293b (Default)
- **Background Light**: #ffffff / #f8fafc (Toggled)

### Typography
- System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Fluid font sizes using CSS custom properties
- Proper heading hierarchy (h1-h6)

### Components
- Pill-style tags for skills/tech stack
- Timeline for experience
- Card grid for projects
- Sticky navigation header
- Contact form with validation

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (container max-width)
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Setup & Development

### Prerequisites
- Modern web browser
- Local web server (optional but recommended)

### Quick Start
1. Clone or download the project files
2. Open `index.html` in a web browser, or
3. Serve via local server: `python -m http.server 8000`
4. Visit `http://localhost:8000`

### Content Updates
1. Edit `data/content.json` to update:
   - Experience and roles
   - Projects and achievements
   - Skills and technologies
   - Education and awards
2. Replace placeholder assets:
   - Add your headshot as `assets/headshot.jpg`
   - Generate favicon as `assets/favicon.ico`
3. Update contact form action in `index.html` (Formspree setup)

## 🧪 Testing Checklist

### Functionality Tests
- [ ] Dark theme loads by default
- [ ] Dark/light mode toggle works and persists
- [ ] Navigation smooth scrolls to sections
- [ ] Active navigation updates on scroll
- [ ] Contact form submits (or mailto fallback)
- [ ] Resume download works (or shows message)
- [ ] All external links open in new tabs

### Responsive Design Tests
- [ ] Mobile view (320px - 767px)
- [ ] Tablet view (768px - 1199px)
- [ ] Desktop view (1200px+)
- [ ] Hero section adapts properly
- [ ] Navigation collapses on mobile
- [ ] Timeline switches to single column

### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets AA standards
- [ ] Focus states are visible
- [ ] Alt text for images
- [ ] Proper heading hierarchy

### Performance Tests
- [ ] Page loads under 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] Smooth animations
- [ ] Reduced motion respected

## 🧪 Unit Tests (Console)

Run these tests in the browser console:

```javascript
// Test date formatting utility
testUtils.testFormatDate();
// Expected output: formatDate('2023-01-15') = 'Jan 2023'
// Returns: true

// Test debounce function
testUtils.testDebounce();
// Expected output: Debounce test: counter = 1 (should be 1)
// Returns: true (after 150ms delay)

// Test theme persistence (should default to dark)
localStorage.removeItem('theme');
location.reload();
// Expected: Page loads in dark mode

// Test theme toggle
document.getElementById('themeToggle').click();
// Expected: Theme switches to light mode

// Test smooth scrolling
document.querySelector('a[href="#about"]').click();
// Expected: Smooth scroll to About section

// Test content loading
fetch('./data/content.json').then(r => r.json()).then(console.log);
// Expected: JSON content object logged
```

## 🔍 SEO & Analytics

### Built-in SEO Features
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD Person schema)
- XML sitemap
- robots.txt

### Analytics Setup (Optional)
Uncomment and configure in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📧 Contact Form Setup

### Formspree Integration
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `index.html` with your actual form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Mailto Fallback
If Formspree is not configured, the form automatically falls back to mailto.

## 🎯 Content Strategy

### Hero Section
- Clear value proposition
- Professional title
- Call-to-action buttons

### Experience Timeline
- Quantified achievements
- Relevant tech stack per role
- Progression narrative

### Projects Showcase
- Problem → Solution → Impact format
- Links to live demos/repositories
- Technical implementation details

### Skills Organization
- Grouped by category (Languages, ML, MLOps, etc.)
- Interactive hover effects
- Current and relevant technologies

## 🚀 Deployment

See [Deploy.md](Deploy.md) for detailed deployment instructions for:
- GitHub Pages
- Netlify
- Vercel
- Custom hosting

## 🔒 Security

- No external dependencies to minimize attack surface
- No user data collection (except contact form)
- HTTPS-ready
- CSP-friendly code structure

## 🤝 Contributing

To customize this website:

1. **Content**: Update `data/content.json`
2. **Styling**: Modify CSS variables in `css/styles.css`
3. **Functionality**: Extend `js/main.js`
4. **Assets**: Replace files in `assets/` folder

## ⚙️ Theme Configuration

The website defaults to dark mode. To change the default:

1. In `js/main.js`, change line 15:
   ```javascript
   const currentTheme = localStorage.getItem('theme') || 'light';
   ```
2. In `css/styles.css`, swap the variable definitions in `:root` and `[data-theme="light"]`

## 📄 License

This project is open source. Feel free to use it as a template for your own personal website.

---

**Built with ❤️ for the ML Engineering community**

For questions or support, contact [kalash.kankaria@gmail.com](mailto:kalash.kankaria@gmail.com) 