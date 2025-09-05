import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guides, { MarkdownGuidePage } from "./pages/Guides";
import MarkdownGuide from "./components/MarkdownGuide";
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
          <Route path="/guides" element={<Guides />} />
          
          {/* Specific guide routes */}
          <Route 
            path="/guides/components-overview" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/components-overview.md" title="Components Grant Overview" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/grounded-overview" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/grounded-overview.md" title="Grounded Overview" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/hardware-grant" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/hardware-grant.md" title="Hardware Grant" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/jlc-ordering" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/jlc-ordering.md" title="How to Order from JLCPCB" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/kicad-submission" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/kicad-submission.md" title="KiCad Submission" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/oshwlab-tutorial" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/oshwlab-tutorial.md" title="OSHWLab Tutorial" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/pcb-resources" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/pcb-resources.md" title="PCB Resources" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/pcba-grant" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/pcba-grant.md" title="PCB Assembly Grant" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/groundplane" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/groundplane.md" title="How to use Groundplane" />
              </MarkdownGuidePage>
            } 
          />
          <Route 
            path="/guides/wokwi-guide" 
            element={
              <MarkdownGuidePage>
                <MarkdownGuide guidePath="/markdown/wokwi-guide.md" title="Wokwi Tutorial" />
              </MarkdownGuidePage>
            } 
          />

          {/* Catch-all route for 404 - MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;