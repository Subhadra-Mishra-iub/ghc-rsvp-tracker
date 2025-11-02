# 🚀 Deploy Now - Step-by-Step Instructions

## ✅ STEP 1: Environment Check (DONE!)
- [x] Node.js installed ✓
- [x] Dependencies installed ✓
- [x] Build successful ✓
- [x] Dev server tested ✓

## 📝 STEP 2: Create GitHub Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `ghc-rsvp-tracker` (or your choice)
3. **Description:** "GHC After-Hours RSVP Tracker - Track your Grace Hopper Celebration events"
4. **Visibility:** ✅ Public (required for free GitHub Pages)
5. **⚠️ IMPORTANT:** DO NOT check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
   
   (We already have these files!)
6. **Click:** "Create repository"

## 📝 STEP 3: Update Base Path (Only if repo name is different)

**If your repository name is NOT `ghc-rsvp-tracker`:**

1. Open `vite.config.ts`
2. Change line 7:
   ```typescript
   base: '/your-actual-repo-name/',  // Your repo name here
   ```

**If your repo IS named `ghc-rsvp-tracker`, skip this step!**

## 📝 STEP 4: Initialize Git and Push Code

**Open terminal and run these commands one by one:**

```bash
# Navigate to project (if not already there)
cd /Users/subhadramishra/Desktop/Projects-2025/ghc-rsvp-tracker

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: GHC RSVP Tracker app"

# Add GitHub remote (REPLACE YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ghc-rsvp-tracker.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!**

**Example:**
```bash
git remote add origin https://github.com/johndoe/ghc-rsvp-tracker.git
```

## 📝 STEP 5: Deploy to GitHub Pages

**Run this single command:**

```bash
npm run deploy
```

**What this does:**
1. Builds your app for production
2. Creates a `gh-pages` branch
3. Pushes the built files to GitHub

**Expected output:**
```
✓ built in [time]ms
Published
```

**⏱️ Wait:** This takes 30-60 seconds

## 📝 STEP 6: Enable GitHub Pages

1. **Go to your repository on GitHub.com**
2. **Click:** "Settings" (top menu, next to "Code")
3. **Scroll down** to "Pages" (left sidebar)
4. **Under "Source":**
   - Branch: Select **`gh-pages`**
   - Folder: Select **`/ (root)`**
5. **Click:** "Save"
6. **Wait 1-2 minutes** for GitHub to deploy

## 📝 STEP 7: Access Your Live App! 🎉

**Your app is now live at:**
```
https://YOUR_USERNAME.github.io/ghc-rsvp-tracker/
```

**Example:**
```
https://johndoe.github.io/ghc-rsvp-tracker/
```

**Share this link with recruiters and attendees!**

## 🔄 Updating Your App (After Making Changes)

```bash
# Make your code changes

# Commit changes
git add .
git commit -m "Update: your changes description"

# Push to main branch
git push

# Deploy again
npm run deploy
```

## 🐛 Troubleshooting

### "Repository not found" error
- Check your GitHub username is correct
- Make sure repository exists on GitHub
- Verify you have push access

### "gh-pages command not found"
```bash
npm install --save-dev gh-pages
```

### "Page shows 404"
- Wait 2-3 more minutes (GitHub needs time)
- Check Settings → Pages shows "gh-pages" branch
- Verify base path in `vite.config.ts` matches repo name

### "Styles not loading"
- Check `base` path in `vite.config.ts` has leading/trailing slashes
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## ✅ Success Checklist

After deployment, verify:
- [ ] App loads at GitHub Pages URL
- [ ] All events display correctly
- [ ] Filters work (search, company, date)
- [ ] Status buttons work
- [ ] Status persists after refresh
- [ ] Import functionality works
- [ ] Export downloads JSON file
- [ ] Works on mobile

## 🎊 Congratulations!

Your GHC RSVP Tracker is now live and ready to showcase! 🚀

---

**Need help?** Check `DEPLOYMENT_STEPS.md` for more detailed instructions.
