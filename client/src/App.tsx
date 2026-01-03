import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Use basename to ensure proper routing when deployed on GitHub Pages */}
        <Router base="/portfolio">
          <Route path="/" component={Home} />
          <Route path="/:rest*" component={NotFound} />  
          {/* Catch-all route for undefined paths */}
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;