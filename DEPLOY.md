# Deployment Guide

## Quick Deploy to GitHub Pages

### Option 1: Using npm script (Recommended)

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Update the base path** in `vite.config.ts` if your repository name is different:
   ```typescript
   base: '/your-actual-repo-name/',
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Save

Your website will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch manually or use the `gh-pages` CLI tool.

## Alternative: Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository and Netlify will auto-deploy on every push.

## Alternative: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Or connect your GitHub repository for automatic deployments.
