# Public Assets

This folder contains static assets served by Next.js.

## Favicon / App Icon

Currently using:
- `favicon.svg` - SVG favicon with FinAI piggy bank gradient logo (works in modern browsers)
- `icon.png` - Placeholder for PNG icon (32x32 minimum, 192x192 recommended)

### To Use Your Custom Logo:

1. **Replace `icon.png`** with your `app_logo.png` file:
   - Recommended sizes: 32x32, 192x192, or 512x512 pixels
   - Format: PNG with transparent background preferred

2. **Optional: Replace `favicon.svg`** with a custom SVG version of your logo

3. The favicon will automatically appear in:
   - Browser tabs
   - Bookmarks
   - Mobile home screen (when app is added)
   - Search results

### File Naming Convention:

Next.js automatically recognizes these icon files in the `public/` folder:
- `favicon.ico` - Classic ICO format (optional)
- `favicon.svg` - Modern SVG format (recommended)
- `icon.png` - PNG fallback
- `apple-icon.png` - Apple touch icon (iOS home screen)

All icons are configured in `src/app/layout.tsx` metadata.
