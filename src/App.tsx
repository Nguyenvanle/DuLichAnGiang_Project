import Header from "./components/Header";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Guides from "./pages/Guides";
import Destinations from "./pages/Destinations";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Booking />
        <Guides />
        <Destinations />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
