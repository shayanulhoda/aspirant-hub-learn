import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Tests from "./pages/Tests";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tests" element={<Tests />} />
          {/* Placeholder routes for other sidebar items */}
          <Route path="/live-classes" element={<div className="p-8">Live Classes - Coming Soon</div>} />
          <Route path="/communities" element={<div className="p-8">Communities - Coming Soon</div>} />
          <Route path="/subscription" element={<div className="p-8">Subscription - Coming Soon</div>} />
          <Route path="/notifications" element={<div className="p-8">Notifications - Coming Soon</div>} />
          <Route path="/profile" element={<div className="p-8">Profile - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
