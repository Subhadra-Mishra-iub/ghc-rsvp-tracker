# How to Enable GitHub Pages - Step by Step

**✅ Your app is live!** Accessible to **everyone** at:
```
https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/
```

Visit it here: [https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/](https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/)

---

## 📝 Step-by-Step Instructions

### Step 1: Go to Your Repository
1. Open your browser
2. Go to: **https://github.com/Subhadra-Mishra-iub/ghc-rsvp-tracker**
3. Make sure you're signed in to GitHub

### Step 2: Open Settings
1. Click on the **"Settings"** tab
   - It's in the top menu bar (next to "Code", "Issues", "Pull requests")
   - If you don't see it, make sure you're the owner of the repo

### Step 3: Find Pages Section
1. Scroll down the **left sidebar** menu
2. Look for **"Pages"** (near the bottom of the sidebar)
3. Click on **"Pages"**

### Step 4: Configure GitHub Pages
1. You'll see a section called **"Source"** or **"Build and deployment"**
2. Under **"Branch"** dropdown:
   - Select: **`gh-pages`**
   - Then select folder: **`/ (root)`**
3. Click the **"Save"** button

### Step 5: Wait for Deployment
1. You'll see a message like: *"Your site is ready to be published at..."*
2. **Wait 1-2 minutes** for GitHub to deploy
3. You might see a yellow/orange warning banner - that's normal, just wait

### Step 6: Verify It's Live
1. Refresh the Settings → Pages page
2. You should see a green checkmark ✅ and the message:
   - *"Your site is live at https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/"*

---

## 🔗 Your Public Link

Once enabled, your app will be live at:
```
https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/
```

**Anyone with this link can access your app!**

---

## ✅ Quick Checklist

- [ ] Go to repository: https://github.com/Subhadra-Mishra-iub/ghc-rsvp-tracker
- [ ] Click "Settings" tab
- [ ] Click "Pages" in left sidebar
- [ ] Select branch: `gh-pages`
- [ ] Select folder: `/ (root)`
- [ ] Click "Save"
- [ ] Wait 1-2 minutes
- [ ] Visit your live link!

---

## 🎉 What Happens Next?

1. **Your app goes live** - Anyone can access it via the link
2. **Share the link** - Perfect for recruiters and GHC attendees!
3. **Automatic updates** - When you run `npm run deploy` again, changes go live automatically

---

## 🐛 Troubleshooting

### "Pages" option not visible?
- Make sure you're the repository owner
- Repository must be Public (free GitHub Pages only works with public repos)

### Still showing "404" after waiting?
- Wait 2-3 more minutes (sometimes takes a bit longer)
- Check that `gh-pages` branch exists (should be there from deployment)
- Verify the branch name in Settings → Pages

### App loads but looks broken?
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that base path in `vite.config.ts` matches repo name

---

**That's it! Your app will be public and shareable! 🚀**
