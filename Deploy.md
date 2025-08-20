# Deployment Guide

This guide covers deploying your personal website to popular hosting platforms. All options provide free hosting with custom domain support.

## 🚀 Quick Deploy Options

### Option 1: GitHub Pages (Recommended for GitHub users)
**Free tier**: Unlimited public repositories, custom domain support

### Option 2: Netlify (Recommended for ease of use)
**Free tier**: 100GB bandwidth/month, 300 build minutes/month

### Option 3: Vercel (Recommended for performance)
**Free tier**: Unlimited static sites, excellent performance

---

## 📁 Pre-deployment Checklist

Before deploying, ensure:
- [ ] Replace `assets/headshot.jpg` with your actual photo
- [ ] Generate and replace `assets/favicon.ico` 
- [ ] Update `data/content.json` with your real information
- [ ] Configure contact form (Formspree ID)
- [ ] Update domain in `sitemap.xml` and structured data
- [ ] Test locally: `python -m http.server 8000`

---

## 🌐 GitHub Pages Deployment

### Step 1: Repository Setup
```bash
# Create new repository on GitHub (e.g., 'kalash-website')
git init
git add .
git commit -m "Initial commit - Personal website"
git remote add origin https://github.com/YOUR_USERNAME/kalash-website.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Source: **Deploy from a branch**
4. Branch: **main** / **root**
5. Click **Save**

### Step 3: Custom Domain (Optional)
1. Add file `CNAME` to repository root:
   ```
   kalashkankaria.dev
   ```
2. In repository settings → Pages → Custom domain:
   - Enter: `kalashkankaria.dev`
   - Check "Enforce HTTPS"

### Step 4: DNS Configuration
Point your domain to GitHub Pages:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A
Name: @
Values: 
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Live URL**: `https://YOUR_USERNAME.github.io/kalash-website/`

---

## 🎯 Netlify Deployment

### Method 1: Drag & Drop (Simplest)
1. Visit [netlify.com](https://netlify.com)
2. Sign up/Log in
3. Drag your project folder to deploy area
4. Site is live at: `https://random-name-12345.netlify.app`

### Method 2: Git Integration (Recommended)
1. Connect GitHub repository
2. Build settings:
   - **Build command**: `# Leave empty`
   - **Publish directory**: `./`
3. Click **Deploy site**

### Step 3: Custom Domain
1. Site settings → **Domain management**
2. **Add custom domain**
3. Follow DNS instructions:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app

   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### Step 4: HTTPS & Performance
- **HTTPS**: Auto-enabled with Let's Encrypt
- **Forms**: Netlify Forms auto-detects your contact form
- **Redirects**: Create `_redirects` file if needed

**Features**:
- Automatic deployments on Git push
- Branch previews
- Form handling without Formspree
- Built-in analytics

---

## ⚡ Vercel Deployment

### Step 1: Deploy
1. Visit [vercel.com](https://vercel.com)
2. **Import Git Repository**
3. Select your repository
4. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: Leave empty
   - **Output Directory**: `./`

### Step 2: Custom Domain
1. Project settings → **Domains**
2. Add `kalashkankaria.dev`
3. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### Step 3: Performance Optimization
- **Edge Functions**: Automatic
- **Image Optimization**: Available for Next.js (not needed here)
- **Analytics**: Enable in project settings

**Features**:
- Instant deployments
- Preview URLs for PRs
- Excellent global CDN
- Serverless functions (if needed later)

---

## 🏠 Custom Hosting / VPS

For full control, deploy to your own server:

### Step 1: Server Setup (Ubuntu/CentOS)
```bash
# Install web server
sudo apt update
sudo apt install nginx

# Configure firewall
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### Step 2: File Upload
```bash
# Upload files via SCP
scp -r ./website/ user@your-server.com:/var/www/html/

# Or use rsync
rsync -avz ./website/ user@your-server.com:/var/www/html/
```

### Step 3: Nginx Configuration
```nginx
server {
    listen 80;
    server_name kalashkankaria.dev www.kalashkankaria.dev;
    
    root /var/www/html;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/css text/javascript application/javascript;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### Step 4: SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d kalashkankaria.dev -d www.kalashkankaria.dev

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## 📊 Performance Optimization

### Image Optimization
- Compress headshot: Use [TinyPNG](https://tinypng.com/)
- WebP format: Modern browsers support
- Responsive images: Add srcset attributes

### Caching Strategy
```html
<!-- Add to index.html <head> -->
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

### CDN Integration
- Cloudflare (free tier): DNS + CDN + security
- jsDelivr: For any GitHub-hosted assets

---

## 🔍 SEO & Analytics Post-Deployment

### Google Search Console
1. Add property: `https://kalashkankaria.dev`
2. Verify ownership (HTML tag or DNS)
3. Submit sitemap: `/sitemap.xml`

### Google Analytics (Optional)
1. Create GA4 property
2. Add tracking code to `index.html`
3. Configure goals and events

### Social Media Cards
Test your Open Graph tags:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🚦 Domain Configuration

### Recommended DNS Records
```
# Root domain
Type: A
Name: @
Value: [Hosting provider's IP]
TTL: 3600

# WWW subdomain
Type: CNAME
Name: www
Value: [Hosting provider's domain]
TTL: 3600

# Email (if you have email hosting)
Type: MX
Name: @
Value: [Your email provider's MX records]
Priority: 10

# Optional: Redirect naked domain to www
Type: URL Redirect
Name: @
Target: https://www.kalashkankaria.dev
```

---

## 🔧 Troubleshooting

### Common Issues

**404 Errors**
- Ensure `index.html` is in root directory
- Check file permissions (644 for files, 755 for directories)

**CSS/JS Not Loading**
- Verify file paths are relative (`./css/styles.css`)
- Check MIME types on server

**Contact Form Not Working**
- Verify Formspree configuration
- Test mailto fallback
- Check browser console for errors

**Dark Mode Not Persisting**
- Check localStorage permissions
- Verify JavaScript is enabled
- Test in private/incognito mode

### Performance Issues
```javascript
// Debug in browser console
console.log('Theme:', localStorage.getItem('theme'));
console.log('Content loaded:', window.contentLoaded);

// Lighthouse audit
// Chrome DevTools → Lighthouse → Generate report
```

---

## 📱 Mobile Testing

Test your site on multiple devices:
- **Chrome DevTools**: Device emulation
- **BrowserStack**: Real device testing (free tier)
- **Physical devices**: iOS Safari, Android Chrome

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

---

## 🎯 Launch Checklist

Pre-launch:
- [ ] All content updated and proofread
- [ ] Images optimized and properly sized
- [ ] Contact form tested
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Performance audit passed (Lighthouse score >90)

Post-launch:
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn/Twitter
- [ ] Add to email signature
- [ ] Update LinkedIn profile URL
- [ ] Monitor analytics and performance

---

## 📞 Support

Having deployment issues?
- Check hosting provider documentation
- Review browser console errors
- Test on different devices/browsers
- Contact: [kalash.kankaria@gmail.com](mailto:kalash.kankaria@gmail.com)

---

**🎉 Congratulations! Your website is now live and ready to showcase your ML engineering expertise to the world.** 