import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import VideoLesson from "./pages/VideoLesson";
import TestTaking from "./pages/TestTaking";
import TestResult from "./pages/TestResult";
import Tests from "./pages/Tests";
import Communities from "./pages/Communities";
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
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:subject/:topic" element={<LessonDetail />} />
          <Route path="/lessons/:subject/:topic/:lesson" element={<VideoLesson />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/test/:testId" element={<TestTaking />} />
          <Route path="/test/:testId/result" element={<TestResult />} />
          {/* Placeholder routes for other sidebar items */}
          <Route path="/live-classes" element={<div className="p-8">Live Classes - Coming Soon</div>} />
          <Route path="/communities" element={<Communities />} />
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
