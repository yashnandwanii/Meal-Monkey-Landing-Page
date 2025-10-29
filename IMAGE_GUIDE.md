# 📸 Image Placement Guide for Meal Monkey Landing Page

This guide shows you exactly where to add your project images to make the landing page complete.

## 📁 Directory Structure

All images should be placed in the `landing-page/images/` directory:

```
landing-page/
├── images/
│   ├── hero-mockup.png          # Main hero section mockup
│   ├── customer-app.png          # Customer app showcase
│   ├── delivery-app.png          # Delivery partner app showcase
│   ├── restaurant-app.png        # Restaurant app showcase
│   ├── architecture.png          # System architecture diagram
│   └── screenshots/
│       ├── login.png             # Login screen
│       ├── home.png              # Home screen
│       ├── restaurants.png       # Restaurant list
│       ├── menu.png              # Menu view
│       ├── cart.png              # Shopping cart
│       └── tracking.png          # Order tracking
```

---

## 🎯 Where to Add Each Image

### 1. **Hero Section - Main Mockup** 
**Location:** Line ~90-95 in `index.html`

**Current placeholder:**
```html
<div class="mockup-placeholder">
    <i class="fas fa-mobile-alt"></i>
    <p>Add main app mockup image</p>
    <small>images/hero-mockup.png</small>
</div>
```

**Replace with:**
```html
<img src="images/hero-mockup.png" alt="Meal Monkey App" class="hero-mockup">
```

**Recommended specifications:**
- Dimensions: 400px × 800px (9:16 ratio)
- Format: PNG with transparent background
- Content: iPhone/Android mockup with app interface
- Example: Multiple phone screens showing different app views

---

### 2. **Customer App Screenshot**
**Location:** Line ~202-207 in `index.html`

**Current placeholder:**
```html
<div class="app-mockup-placeholder">
    <!-- ADD CUSTOMER APP SCREENSHOT HERE -->
    <i class="fas fa-mobile-alt"></i>
    <p>Add customer app screenshot</p>
    <small>images/customer-app.png</small>
</div>
```

**Replace with:**
```html
<img src="images/customer-app.png" alt="Customer App Interface" class="app-screenshot">
```

**Recommended specifications:**
- Dimensions: 300px × 600px
- Format: PNG or JPG
- Content: Main customer app screen (home/browse restaurants)

---

### 3. **Delivery Partner App Screenshot**
**Location:** Line ~235-240 in `index.html`

**Current placeholder:**
```html
<div class="app-mockup-placeholder">
    <!-- ADD DELIVERY APP SCREENSHOT HERE -->
    <i class="fas fa-mobile-alt"></i>
    <p>Add delivery app screenshot</p>
    <small>images/delivery-app.png</small>
</div>
```

**Replace with:**
```html
<img src="images/delivery-app.png" alt="Delivery Partner App Interface" class="app-screenshot">
```

**Recommended specifications:**
- Dimensions: 300px × 600px
- Format: PNG or JPG
- Content: Delivery dashboard or map view

---

### 4. **Restaurant App Screenshot**
**Location:** Line ~268-273 in `index.html`

**Current placeholder:**
```html
<div class="app-mockup-placeholder">
    <!-- ADD RESTAURANT APP SCREENSHOT HERE -->
    <i class="fas fa-mobile-alt"></i>
    <p>Add restaurant app screenshot</p>
    <small>images/restaurant-app.png</small>
</div>
```

**Replace with:**
```html
<img src="images/restaurant-app.png" alt="Restaurant App Interface" class="app-screenshot">
```

**Recommended specifications:**
- Dimensions: 300px × 600px
- Format: PNG or JPG
- Content: Restaurant dashboard or menu management

---

### 5. **Screenshots Slider (6 images)**
**Location:** Line ~371-420 in `index.html`

**Current placeholders:**
```html
<div class="screenshot-item">
    <div class="screenshot-placeholder">
        <i class="fas fa-image"></i>
        <p>Login Screen</p>
        <small>images/screenshots/login.png</small>
    </div>
</div>
```

**Replace each with:**
```html
<div class="screenshot-item">
    <img src="images/screenshots/login.png" alt="Login Screen" class="screenshot">
</div>
<div class="screenshot-item">
    <img src="images/screenshots/home.png" alt="Home Screen" class="screenshot">
</div>
<div class="screenshot-item">
    <img src="images/screenshots/restaurants.png" alt="Restaurant List" class="screenshot">
</div>
<div class="screenshot-item">
    <img src="images/screenshots/menu.png" alt="Menu View" class="screenshot">
</div>
<div class="screenshot-item">
    <img src="images/screenshots/cart.png" alt="Shopping Cart" class="screenshot">
</div>
<div class="screenshot-item">
    <img src="images/screenshots/tracking.png" alt="Order Tracking" class="screenshot">
</div>
```

**Recommended specifications:**
- Dimensions: 300px × 600px each
- Format: PNG or JPG
- Content: Various app screens from your Flutter apps

---

### 6. **Architecture Diagram**
**Location:** Line ~450-456 in `index.html`

**Current placeholder:**
```html
<div class="diagram-placeholder">
    <i class="fas fa-project-diagram"></i>
    <p>Add architecture diagram</p>
    <small>images/architecture.png</small>
</div>
```

**Replace with:**
```html
<img src="images/architecture.png" alt="System Architecture" class="architecture-diagram">
```

**Recommended specifications:**
- Dimensions: 600px × 500px
- Format: PNG or SVG
- Content: Diagram showing Flutter apps → Node.js API → MongoDB
- Tools to create: draw.io, Figma, or Excalidraw

---

## 🎨 How to Capture Screenshots from Flutter Apps

### For Android Emulator:
1. Run your Flutter app
2. Click the camera icon in the emulator toolbar
3. Screenshots saved to: `~/Desktop` by default

### For iOS Simulator:
1. Run your Flutter app  
2. Press `Cmd + S` to save screenshot
3. Screenshots saved to: `~/Desktop` by default

### From Physical Device:
**Android:** Volume Down + Power button
**iOS:** Side button + Volume Up

---

## 🖼️ Optional: Add Custom Styling for Images

Add this to `css/styles.css` to style your images nicely:

```css
/* Hero mockup styling */
.hero-mockup {
    width: 100%;
    max-width: 400px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: float 3s ease-in-out infinite;
}

/* App screenshot styling */
.app-screenshot {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.app-screenshot:hover {
    transform: scale(1.05);
}

/* Screenshot slider images */
.screenshot {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Architecture diagram */
.architecture-diagram {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

---

## 📱 Creating App Mockups (If You Don't Have Any)

### Free Tools:
1. **Mockuphone.com** - Upload screenshots, get device frames
2. **Figma** - Design custom mockups (free tier available)
3. **Canva** - Phone mockup templates
4. **Smartmockups.com** - Free tier for basic mockups

### Tips:
- Use real app screenshots from your Flutter apps
- Add device frames (iPhone/Android) for professional look
- Show multiple screens in hero section
- Use consistent aspect ratios

---

## ✅ Quick Checklist

Before deploying your landing page, make sure you have:

- [ ] Hero mockup image (`hero-mockup.png`)
- [ ] Customer app screenshot (`customer-app.png`)
- [ ] Delivery app screenshot (`delivery-app.png`)
- [ ] Restaurant app screenshot (`restaurant-app.png`)
- [ ] Architecture diagram (`architecture.png`)
- [ ] 6 screenshots for the slider:
  - [ ] Login screen
  - [ ] Home screen
  - [ ] Restaurant list
  - [ ] Menu view
  - [ ] Cart screen
  - [ ] Order tracking

---

## 🚀 Testing Your Images

After adding images:

1. Open `index.html` in your browser
2. Check all images load correctly
3. Verify they look good on mobile (use browser dev tools)
4. Ensure no broken image icons appear

---

## 📝 Image Optimization Tips

To keep your landing page fast:

1. **Compress images** using:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)

2. **Recommended file sizes:**
   - Hero mockup: < 200KB
   - App screenshots: < 150KB each
   - Architecture diagram: < 100KB

3. **Use WebP format** for better compression (convert PNG/JPG to WebP)

---

## 🎯 Example Image Replacement

**Before:**
```html
<div class="mockup-placeholder">
    <i class="fas fa-mobile-alt"></i>
    <p>Add main app mockup image</p>
    <small>images/hero-mockup.png</small>
</div>
```

**After:**
```html
<img src="images/hero-mockup.png" 
     alt="Meal Monkey App Interface" 
     class="hero-mockup"
     loading="lazy">
```

---

**Need help?** Check the image placeholders in the live page - they show exactly where each image should go! 🎨
