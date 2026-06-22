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
import RejestracjaLevelUp from "./pages/RejestracjaLevelUp";
import DesignSystem from "./pages/DesignSystem";
import Partnerzy from "./pages/Partnerzy";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";
import RegulaminLevelUp from "./pages/RegulaminLevelUp";
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
          <Route path="/partnerzy" element={<Partnerzy />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dolacz" element={<Dolacz />} />
          <Route path="/rejestracja-level-up" element={<RejestracjaLevelUp />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/regulamin-level-up" element={<RegulaminLevelUp />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
