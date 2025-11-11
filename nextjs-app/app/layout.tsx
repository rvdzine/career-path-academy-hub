import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import UseScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Digital Marketing Institute in Noida",
  description: "Join the best Digital Marketing Institute in Noida. iDigital Studies offers practical Digital Marketing courses like SEO, SMO, PPC with live projects, 100% placement assistance, and expert training. Enroll today! ",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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

