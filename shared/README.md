# Shared Layout System

This directory contains reusable components for the grona.ai website. All shared elements (header, footer, head content, CSS, and JavaScript) are centralized here for easy maintenance and consistency across pages.

## Structure

```
shared/
├── head-content.html    # Shared head elements (fonts, favicons, GTM)
├── header.html          # Header/navbar HTML
├── footer.html          # Footer HTML
├── shared.css           # Shared CSS variables and base styles
├── shared.js            # Shared JavaScript (theme toggle, footer year)
├── loader.js            # Component loader script
├── template.html        # Example template showing how to use the system
└── README.md            # This file
```

## Usage

### Method 1: Auto-load (Recommended)

Add `data-shared-auto-load` to your `<html>` tag and use data attributes to mark insertion points:

```html
<!DOCTYPE html>
<html lang="en" data-shared-auto-load>
  <head>
    <!-- Shared head content will be loaded automatically -->
    <script src="shared/loader.js"></script>
    <link rel="stylesheet" href="shared/shared.css" />
  </head>
  <body>
    <!-- Header will be inserted here -->
    <div data-shared-header></div>
    
    <!-- Your content -->
    
    <!-- Footer will be inserted here -->
    <div data-shared-footer></div>
    
    <script src="shared/shared.js"></script>
  </body>
</html>
```

### Method 2: Manual Load

Call `loadSharedComponents()` manually:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="shared/loader.js"></script>
    <link rel="stylesheet" href="shared/shared.css" />
  </head>
  <body>
    <div id="header-placeholder"></div>
    
    <!-- Your content -->
    
    <div id="footer-placeholder"></div>
    
    <script src="shared/shared.js"></script>
    <script>
      // Load components manually
      loadSharedComponents({
        header: true,
        footer: true,
        headerTarget: '#header-placeholder',
        footerTarget: '#footer-placeholder'
      });
    </script>
  </body>
</html>
```

### Method 3: Include Directly (No JavaScript)

If you prefer not to use JavaScript loading, you can manually copy the content from the component files into your HTML:

1. Copy content from `head-content.html` into your `<head>` section
2. Copy content from `header.html` into your `<body>` (after opening tag)
3. Copy content from `footer.html` into your `<body>` (before closing tag)
4. Include `shared/shared.css` in `<head>`
5. Include `shared/shared.js` before closing `</body>`

## Components

### head-content.html
Contains:
- Font preconnect and stylesheet links
- Favicon links
- Google Tag Manager script

### header.html
Contains:
- Navbar with logo, navigation links, and theme toggle
- Responsive menu button (mobile)

### footer.html
Contains:
- Footer links navigation
- Copyright notice with dynamic year
- Google Tag Manager noscript fallback

### shared.css
Contains:
- Brand color variables (light and dark mode)
- Base reset styles
- Typography styles
- Button styles
- Navbar styles
- Footer styles
- Responsive breakpoints

### shared.js
Contains:
- Theme toggle functionality
- Logo switching based on theme
- Footer year initialization

## Customization

### Updating Navigation Links

Edit `shared/header.html` to update navigation links:

```html
<nav class="nav-links" aria-label="Main navigation">
  <a href="how_it_works.html">How it works</a>
  <a href="index.html#testing">Features</a>
  <a href="pricing.html">Pricing</a>
  <a href="blog.html">Blog</a>
</nav>
```

### Updating Footer Links

Edit `shared/footer.html` to update footer links.

### Updating Brand Colors

Edit CSS variables in `shared/shared.css`:

```css
:root {
  --green-800: #0b6b53; /* brand primary */
  /* ... other variables */
}

[data-theme="dark"] {
  --green-800: #bbe55b; /* vibrant light green */
  /* ... other variables */
}
```

## Best Practices

1. **Always include shared.css** - This contains all the base styles and variables
2. **Always include shared.js** - This handles theme toggle and other common functionality
3. **Use the template** - Start new pages from `template.html` for consistency
4. **Test in both themes** - Ensure your page looks good in both light and dark modes
5. **Keep custom styles minimal** - Leverage the shared CSS variables and classes

## Notes

- The loader uses `fetch()` API, so it requires a web server (won't work with `file://` protocol)
- For production, consider using a build tool to inline these components instead of loading them dynamically
- The shared components are designed to work independently if JavaScript fails

## Troubleshooting

**Components not loading?**
- Ensure you're running from a web server (not `file://`)
- Check browser console for errors
- Verify file paths are correct relative to your HTML file

**Styles not applying?**
- Ensure `shared/shared.css` is included in `<head>`
- Check that CSS variables are defined correctly

**Theme toggle not working?**
- Ensure `shared/shared.js` is included before closing `</body>`
- Check that the theme toggle button has `id="theme-toggle"`

