# Environment Setup Guide

## ✅ Environment Verification

Your current environment:
- **Node.js**: v22.19.0 ✅
- **npm**: 10.9.3 ✅
- **Using nvm**: Yes ✅

## 🔧 Step 1: Verify Project Dependencies

Run this command to ensure all dependencies are installed:

```bash
npm install
```

This will install all required packages listed in `package.json`.

## 🔧 Step 2: Verify Environment Setup

Check that everything is properly installed:

```bash
# Check Node version (should be 18+)
node --version

# Check npm version
npm --version

# Verify dependencies are installed
ls node_modules | head -5
```

## 📦 Installed Dependencies

### Production Dependencies:
- `react` & `react-dom` - React framework
- `framer-motion` - Animation library

### Development Dependencies:
- `typescript` - TypeScript compiler
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` & `autoprefixer` - CSS processing
- `gh-pages` - GitHub Pages deployment

## 🧪 Step 3: Test the Environment

### Test Development Server:
```bash
npm run dev
```
Expected: Server starts on `http://localhost:5173`

### Test Production Build:
```bash
npm run build
```
Expected: Creates `dist/` folder with production files

### Test Preview:
```bash
npm run preview
```
Expected: Serves production build locally

## ✅ Environment Ready Checklist

- [x] Node.js installed (v22.19.0)
- [x] npm installed (10.9.3)
- [x] Dependencies installed
- [ ] Development server tested
- [ ] Production build tested
- [ ] Website works in browser

## 🚨 Common Issues

### Issue: "Command not found: node"
**Solution:** Make sure nvm is active:
```bash
source ~/.zshrc  # or ~/.bash_profile
nvm use 22.19.0
```

### Issue: "npm install fails"
**Solution:** Clear cache and retry:
```bash
npm cache clean --force
npm install
```

### Issue: "Permission denied"
**Solution:** Don't use sudo. If needed, fix npm permissions:
```bash
npm config set prefix ~/.npm-global
```

## 🎯 Next Steps After Environment Setup

1. ✅ Verify environment (this step)
2. Test the website locally (`npm run dev`)
3. Build for production (`npm run build`)
4. Set up Git repository
5. Deploy to GitHub Pages

---

**Your environment is ready! 🚀**
