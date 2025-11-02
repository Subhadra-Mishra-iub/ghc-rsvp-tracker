# Step-by-Step Deployment Guide

## ✅ Prerequisites Checklist

- [x] Node.js 18+ installed (check with `node --version`)
- [x] npm or yarn installed (check with `npm --version`)
- [x] Git installed (check with `git --version`)
- [x] GitHub account created
- [x] Dependencies installed (`npm install` completed)

## 📝 Step 1: Verify Local Setup

1. **Test the website locally:**
   ```bash
   npm run dev
   ```
   
2. **Open browser to:** `http://localhost:5173`
   
3. **Verify it works:**
   - ✅ Website loads with default events
   - ✅ Cards display correctly
   - ✅ Filters work
   - ✅ Status buttons work

4. **Stop the dev server** (Ctrl+C)

## 📝 Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in

2. **Click the "+" icon** (top right) → **New repository**

3. **Repository settings:**
   - Name: `ghc-rsvp-tracker` (or your preferred name)
   - Description: "GHC After-Hours RSVP Tracker - Track your Grace Hopper Celebration events"
   - Visibility: **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

4. **Click "Create repository"**

## 📝 Step 3: Update Base Path (IMPORTANT!)

**Only if your repository name is NOT `ghc-rsvp-tracker`:**

1. Open `vite.config.ts`
2. Change line 7:
   ```typescript
   base: '/your-actual-repo-name/',  // Replace with your repo name
   ```

## 📝 Step 4: Initialize Git and Push to GitHub

**Run these commands in your terminal (one by one):**

```bash
# Navigate to project folder
cd /Users/subhadramishra/Desktop/Projects-2025/ghc-rsvp-tracker

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: GHC RSVP Tracker website"

# Add your GitHub repository as remote (REPLACE with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/ghc-rsvp-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

## 📝 Step 5: Deploy to GitHub Pages

**Run this single command:**

```bash
npm run deploy
```

This will:
1. Build your website for production
2. Create a `gh-pages` branch
3. Push the built files to GitHub

**Expected output:**
```
> ghc-rsvp-tracker@1.0.0 build
> tsc && vite build

[...build output...]

Published
```

## 📝 Step 6: Enable GitHub Pages

1. **Go to your GitHub repository** on github.com

2. **Click "Settings"** (top menu)

3. **Scroll down to "Pages"** (left sidebar)

4. **Under "Source":**
   - Branch: Select **`gh-pages`**
   - Folder: Select **`/ (root)`**
   - Click **"Save"**

5. **Wait 1-2 minutes** for GitHub to deploy

## 📝 Step 7: Access Your Live Website

1. **Your website will be live at:**
   ```
   https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/
   ```
   
   **✅ Currently live at:** [https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/](https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/)

2. **Share this link** with recruiters and attendees!

## 🔄 Updating Your Website (After Changes)

If you make changes to your website:

```bash
# Make your code changes

# Stage and commit
git add .
git commit -m "Update: description of changes"

# Push to main branch
git push

# Deploy again
npm run deploy
```

## 🐛 Troubleshooting

### Issue: "gh-pages command not found"
**Solution:**
```bash
npm install --save-dev gh-pages
```

### Issue: "Build fails"
**Solution:**
```bash
npm run build
```
Check for TypeScript errors and fix them.

### Issue: "Page shows 404"
**Solutions:**
1. Check that GitHub Pages is enabled (Settings → Pages)
2. Verify the `base` path in `vite.config.ts` matches your repo name
3. Wait a few more minutes - deployment can take 2-5 minutes

### Issue: "Styles/CSS not loading"
**Solution:**
Make sure `base` path in `vite.config.ts` is correct and starts/ends with `/`

## ✅ Success Checklist

After deployment, verify:
- [ ] Website loads at the GitHub Pages URL
- [ ] All events display correctly
- [ ] Filters work
- [ ] Status updates persist (check localStorage)
- [ ] Import functionality works
- [ ] Export downloads JSON file
- [ ] Mobile responsive design works

---

**Congratulations! Your website is now live! 🎉**
