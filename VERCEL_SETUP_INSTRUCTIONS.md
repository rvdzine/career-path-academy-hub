# 🚀 Vercel Deployment - Step by Step Instructions

## ⚠️ IMPORTANT: Your project is in `nextjs-app` subdirectory

Vercel is trying to build from the root directory, but your Next.js app is inside `nextjs-app/` folder.

## ✅ Solution: Configure Vercel Root Directory

### Method 1: Via Vercel Dashboard (RECOMMENDED)

1. **Go to your Vercel project**: https://vercel.com/dashboard
2. Click on your project: `career-path-academy-hub`
3. Go to **Settings** (top navigation)
4. Click **General** (left sidebar)
5. Scroll down to **Root Directory**
6. Click **Edit**
7. Enter: `nextjs-app`
8. Click **Save**
9. Go to **Deployments** tab
10. Click **Redeploy** on the latest deployment
11. Check **"Clear cache and redeploy"**
12. Click **Redeploy**

### Method 2: Via vercel.json in Root (Alternative)

If you can't change settings, create this file in the ROOT directory (not in nextjs-app):

**File: `vercel.json` (in root)**
```json
{
  "buildCommand": "cd nextjs-app && npm install && npm run build",
  "outputDirectory": "nextjs-app/.next",
  "installCommand": "cd nextjs-app && npm install"
}
```

### Method 3: Via Vercel CLI

```bash
# From root directory
vercel --cwd nextjs-app --prod
```

## 📋 Verification Checklist

Before deploying, verify these files exist in `nextjs-app/`:

- ✅ `package.json` with:
  - `"next": "15.1.0"`
  - `"next-themes": "^0.4.4"`
  - `"react-day-picker": "^9.4.4"`
  - `"vaul": "^1.1.1"`

- ✅ `.npmrc` with:
  ```
  legacy-peer-deps=true
  ```

- ✅ `.eslintrc.json` with warnings disabled

- ✅ `next.config.js` properly configured

- ✅ `components/ui/calendar.tsx` updated for react-day-picker v9

## 🔧 If Build Still Fails

### Clear Everything and Redeploy:

1. **Delete the project from Vercel**
2. **Re-import from GitHub**
3. During import, set:
   - **Framework Preset**: Next.js
   - **Root Directory**: `nextjs-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

## 🎯 Expected Build Output

When successful, you should see:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (19/19)
✓ Finalizing page optimization

Route (app)                                      Size     First Load JS
┌ ○ /                                            22.2 kB         251 kB
├ ○ /_not-found                                  140 B           106 kB
├ ○ /about                                       4.15 kB         187 kB
... (all routes successful)
```

## 🐛 Common Issues

### Issue 1: "Error while parsing config file: package-lock.json"
**Solution**: This is a warning, not an error. It won't stop the build.

### Issue 2: "next-themes@0.3.0" in logs (old version)
**Solution**: Vercel is using cached dependencies. Clear cache and redeploy.

### Issue 3: "peer dependency" warnings
**Solution**: These are warnings, not errors. The `.npmrc` file handles them.

## 📞 Need Help?

If you're still facing issues:

1. Share the **full Vercel build log**
2. Confirm **Root Directory is set to `nextjs-app`**
3. Confirm you've **cleared the cache** before redeploying

## ✅ Final Checklist

- [ ] Root Directory set to `nextjs-app` in Vercel settings
- [ ] Latest code pushed to GitHub
- [ ] Cache cleared in Vercel
- [ ] Redeployed after clearing cache
- [ ] Build logs show correct package versions (next-themes@0.4.4, etc.)

---

**Current Status**: ✅ Local build is 100% successful with ZERO errors
**Next Step**: Configure Vercel Root Directory to `nextjs-app`
