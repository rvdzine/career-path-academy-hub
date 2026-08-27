import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import UseScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://idigitalstudies.com"),
  alternates: {
    canonical: "/",
  },
  title: "Digital Marketing Institute in Noida",
  description:
    "Learn Digital Marketing in Noida with iDigitalStudies. Get practical training in SEO, PPC, SMM and performance marketing with real-world projects.",
  keywords: [
    "digital marketing classes",
    "digital marketing course",
    "digital marketing course near me",
    "digital marketing institute",
    "digital marketing classes in Noida",
    "digital marketing course in Noida",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ids-favicon.svg" type="image/svg+xml" />
        
        {/* Structured Data: Organization & LocalBusiness JSON-LD */}
        <JsonLd schema={[organizationSchema, localBusinessSchema]} />

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57WCQG8');
          `}
        </Script>
        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1486883099250043');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57WCQG8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1486883099250043&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <QueryProvider>
          <ThemeProvider defaultTheme="light" storageKey="ids-ui-theme">
            <TooltipProvider>
              <UseScrollToTop />
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
