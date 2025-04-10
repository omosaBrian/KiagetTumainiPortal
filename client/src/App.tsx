import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admissions from "@/pages/Admissions";
import Campus from "@/pages/Campus";
import Academics from "@/pages/Academics";
import NewsEvents from "@/pages/NewsEvents";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/campus/:id" component={Campus} />
          <Route path="/academics/:level" component={Academics} />
          <Route path="/news-events" component={NewsEvents} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
