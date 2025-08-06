import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guides from "./pages/Guides";
import {
  OverviewPage,
  TrackingTimePage,
  JLCOrderingPage,
  OSHWLabPage,
  PCBResourcesPage,
  PartsPage,
  PCBGrantPage,
  InventoryPage,
} from "./pages/Guides";
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

          {/* Individual guide pages */}
          <Route path="/guides/grounded-overview" element={<OverviewPage />} />
          <Route path="/guides/hardware-grant" element={<PartsPage />} />
          <Route path="/guides/pcba-grant" element={<PCBGrantPage />} />
          <Route path="/guides/tracking-time" element={<TrackingTimePage />} />
          <Route path="/guides/jlc-ordering" element={<JLCOrderingPage />} />
          <Route path="/guides/oshwlab-tutorial" element={<OSHWLabPage />} />
          <Route path="/guides/pcb-resources" element={<PCBResourcesPage />} />
          <Route path="/guides/hardware-inventory" element={<InventoryPage />} />
          <Route path="/bin" element={<InventoryPage />} />
          <Route path="/guides/bin" element={<InventoryPage />} />





          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;