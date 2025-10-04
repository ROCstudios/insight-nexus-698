import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Opportunities from "./pages/Opportunities";
import Teams from "./pages/Teams";
import Simulator from "./pages/Simulator";
import Roadmap from "./pages/Roadmap";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHEfdON2hyH_luFKTClE7SjRb5fWwFCGw",
  authDomain: "yao-proposal-39d52.firebaseapp.com",
  projectId: "yao-proposal-39d52",
  storageBucket: "yao-proposal-39d52.firebasestorage.app",
  messagingSenderId: "1062023353009",
  appId: "1:1062023353009:web:7d236033cca3ecdadb8890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
                  <Route path="/milestones" element={<Insights />} />
                  <Route path="/alternatives" element={<Opportunities />} />
                  <Route path="/pricing" element={<Teams />} />
                  <Route path="/simulator" element={<Simulator />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
