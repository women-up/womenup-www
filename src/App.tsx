import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ONas from "./pages/ONas";
import Inicjatywy from "./pages/Inicjatywy";
import Aktualnosci from "./pages/Aktualnosci";
import Kontakt from "./pages/Kontakt";
import Dolacz from "./pages/Dolacz";
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
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/inicjatywy" element={<Inicjatywy />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dolacz" element={<Dolacz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
