#!/bin/bash

echo "🔍 Verifying Build Configuration..."
echo ""

# Check if nextjs-app directory exists
if [ ! -d "nextjs-app" ]; then
    echo "❌ ERROR: nextjs-app directory not found!"
    exit 1
fi

echo "✅ nextjs-app directory exists"

# Check package.json
if [ ! -f "nextjs-app/package.json" ]; then
    echo "❌ ERROR: package.json not found!"
    exit 1
fi

echo "✅ package.json exists"

# Check for correct versions
echo ""
echo "📦 Checking package versions..."

NEXT_VERSION=$(grep '"next":' nextjs-app/package.json | grep -o '"[0-9.]*"' | tr -d '"')
NEXT_THEMES=$(grep '"next-themes":' nextjs-app/package.json | grep -o '"[\^0-9.]*"' | tr -d '"')
DAY_PICKER=$(grep '"react-day-picker":' nextjs-app/package.json | grep -o '"[\^0-9.]*"' | tr -d '"')
VAUL=$(grep '"vaul":' nextjs-app/package.json | grep -o '"[\^0-9.]*"' | tr -d '"')

echo "  Next.js: $NEXT_VERSION (expected: 15.1.0)"
echo "  next-themes: $NEXT_THEMES (expected: ^0.4.4)"
echo "  react-day-picker: $DAY_PICKER (expected: ^9.4.4)"
echo "  vaul: $VAUL (expected: ^1.1.1)"

# Check .npmrc
if [ ! -f "nextjs-app/.npmrc" ]; then
    echo "❌ WARNING: .npmrc not found!"
else
    echo "✅ .npmrc exists"
fi

# Check vercel.json
if [ ! -f "vercel.json" ]; then
    echo "⚠️  WARNING: vercel.json not found in root"
else
    echo "✅ vercel.json exists in root"
fi

echo ""
echo "🏗️  Running build test..."
cd nextjs-app

# Clean install
echo "  Cleaning node_modules..."
rm -rf node_modules package-lock.json

echo "  Installing dependencies..."
npm install > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo "❌ ERROR: npm install failed!"
    exit 1
fi

echo "✅ Dependencies installed"

# Build
echo "  Building project..."
npm run build > build.log 2>&1

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Build failed!"
    echo ""
    echo "Last 20 lines of build log:"
    tail -20 build.log
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📊 Build Summary:"
tail -30 build.log | grep -A 30 "Route (app)"

echo ""
echo "✅ ALL CHECKS PASSED!"
echo ""
echo "🚀 Ready to deploy to Vercel!"
echo ""
echo "Next steps:"
echo "1. Push all changes to GitHub"
echo "2. Go to Vercel Dashboard"
echo "3. Set Root Directory to: nextjs-app"
echo "4. Clear cache and redeploy"
