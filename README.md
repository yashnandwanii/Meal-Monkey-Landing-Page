# 🍕 Meal Monkey - Landing Page

A professional, modern landing page showcasing the Meal Monkey Food Delivery Ecosystem.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Beautiful scroll animations using AOS library
- **Modern UI** - Gradient backgrounds, smooth transitions, and clean design
- **Interactive Elements** - Auto-sliding screenshot carousel, hover effects
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized CSS and JavaScript

## 🚀 Quick Start

1. **Open the landing page:**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results

2. **Using a local server (recommended):**
   ```bash
   # If you have Python installed
   python -m http.server 8000
   
   # If you have Node.js installed
   npx serve
   
   # Then open: http://localhost:8000
   ```

3. **Add your images:**
   - Follow the instructions in `IMAGE_GUIDE.md`
   - Place images in the `images/` directory
   - Replace placeholders in `index.html`

## 📁 File Structure

```
landing-page/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and responsive design
├── js/
│   └── main.js            # Interactive features & animations
├── images/                # Your app screenshots go here
│   ├── hero-mockup.png
│   ├── customer-app.png
│   ├── delivery-app.png
│   ├── restaurant-app.png
│   ├── architecture.png
│   └── screenshots/
│       ├── login.png
│       ├── home.png
│       ├── restaurants.png
│       ├── menu.png
│       ├── cart.png
│       └── tracking.png
├── IMAGE_GUIDE.md         # Detailed guide for adding images
└── README.md              # This file
```

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with app mockup
2. **Features** - 6 key features of the platform
3. **Apps Showcase** - Details about all 3 apps (Customer, Delivery, Restaurant)
4. **Tech Stack** - Technologies used (Frontend, Backend, Integrations)
5. **Screenshots** - Carousel slider with app screenshots
6. **Architecture** - System architecture diagram and explanation
7. **GitHub CTA** - Call-to-action to view the repository
8. **Footer** - Links and information

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #FF6B35;      /* Main brand color */
    --secondary-color: #F7931E;     /* Secondary color */
    --accent-color: #FC4A1A;        /* Accent color */
    --dark-color: #1a1a2e;          /* Dark text/backgrounds */
}
```

### Update Content
- Edit text directly in `index.html`
- Update GitHub links (search for "yashnandwanii/Delivery-Partner-App")
- Modify feature descriptions, stats, etc.

### Add/Remove Sections
- Each section is wrapped in `<section>` tags with unique IDs
- Easy to comment out or add new sections
- Update navigation links in the navbar accordingly

## 📱 Adding Your Images

See `IMAGE_GUIDE.md` for detailed instructions on:
- Where to place each image
- Recommended image dimensions
- How to capture screenshots from Flutter apps
- Image optimization tips

**Quick summary:**
1. Take screenshots of your Flutter apps
2. Save them in `images/` folder with correct names
3. Replace placeholder code in `index.html` with `<img>` tags
4. Refresh the page to see your images

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload the `landing-page` folder contents
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at: `https://yourusername.github.io/repo-name/`

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the landing-page directory
3. Follow prompts
4. Get instant deployment URL

### Netlify (Free)
1. Drag and drop the `landing-page` folder to Netlify
2. Or connect to your GitHub repository
3. Automatic deployment on every push

## ✨ Credits

- **Fonts:** Google Fonts (Poppins)
- **Icons:** Font Awesome 6
- **Animations:** AOS (Animate On Scroll)
- **Design Inspiration:** Modern SaaS landing pages

## 📄 License

This landing page template is free to use for your Meal Monkey project.

---

**Built with ❤️ for the Meal Monkey Food Delivery Ecosystem**

Need help? Check the `IMAGE_GUIDE.md` or open the page to see visual placeholders!
