import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">조합 소개 페이지 (준비중)</h1></div>} />
      <Route path="/centers" component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">센터 안내 페이지 (준비중)</h1></div>} />
      <Route path="/programs" component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">프로그램 페이지 (준비중)</h1></div>} />
      <Route path="/news" component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">소식 페이지 (준비중)</h1></div>} />
      <Route path="/support" component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">후원하기 페이지 (준비중)</h1></div>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
