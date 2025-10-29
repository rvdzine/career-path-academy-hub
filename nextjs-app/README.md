# Career Path Academy Hub - Next.js Version

This is a Next.js conversion of the React application.

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
bun install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Key Changes from React Version

1. **Routing**: Converted from React Router to Next.js App Router
   - Routes are now file-based in the `app/` directory
   - Dynamic routes use `[param]` folder naming convention

2. **Client Components**: Components using React hooks have `"use client"` directive

3. **Link Component**: Changed from `react-router-dom` to Next.js `Link`
   - `to` prop changed to `href`
   - No need for `BrowserRouter` wrapper

4. **Navigation Hooks**:
   - `useNavigate()` → `useRouter()` from `next/navigation`
   - `useLocation()` → `usePathname()` from `next/navigation`
   - `useParams()` → `useParams()` from `next/navigation`

5. **Layout**: Root layout in `app/layout.tsx` wraps all pages

6. **Public Assets**: Static files are served from the `public/` directory

## Project Structure

```
nextjs-app/
├── app/                    # App router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── courses/           # Courses pages
│   ├── blog/              # Blog pages
│   └── ...                # Other routes
├── components/            # React components
│   ├── pages/            # Page components
│   ├── ui/               # UI components (shadcn)
│   └── ...               # Other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── next.config.js         # Next.js configuration
```

## API Integration

The application connects to the backend at:
- Production: `https://idg-backend.onrender.com/api/courses/`
- Local: `http://localhost:8000/api/courses/` (can be configured in `lib/axios.ts`)

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query (TanStack Query)
- Framer Motion
- Axios

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

