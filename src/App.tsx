
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Placement from "./pages/Placement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OfflineCenter from "./pages/OfflineCenter";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ"
// import Blog from "./pages/Blog"
import IDSLife from "./pages/IDSLife"
import Privacy from "./pages/PrivacyPolicy"
import RefundPolicy from "./pages/RefundPolicy"
import Terms from "./pages/Terms"
import IDS from "./pages/IDSLife"
// import Events from "./pages/Events"
import { ThemeProvider } from "@/components/ThemeProvider";
import  InternshipForm  from "@/components/InternshipForm"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ids-ui-theme">

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/jobs-and-placements" element={<Placement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offline-center" element={<OfflineCenter />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/ids" element={<IDSLife />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ids" element={<IDS />} />
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/internship-form" element={<InternshipForm />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
