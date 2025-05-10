import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import { LocalizationProvider } from "./hooks/useLocalization";

function Router() {
  return (
    <Switch>
      {/* Home routes */}
      <Route path="/" component={HomePage} />
      
      {/* About routes - English and Romanian */}
      <Route path="/about" component={AboutPage} />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/despre-noi" component={AboutPage} />
      
      {/* Services routes - English and Romanian */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/servicii" component={ServicesPage} />
      
      {/* Solutions routes - English and Romanian */}
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/solutii" component={SolutionsPage} />
      
      {/* Portfolio routes - English and Romanian */}
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/portofoliu" component={PortfolioPage} />
      
      {/* Project detail routes - English and Romanian */}
      <Route path="/portfolio/:id" component={ProjectDetailPage} />
      <Route path="/portofoliu/:id" component={ProjectDetailPage} />
      
      {/* Contact route */}
      <Route path="/contact" component={HomePage} />
      
      {/* 404 route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider>
        <Router />
        <Toaster />
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
