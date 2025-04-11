import "./App.css";
import Footer from "./components/footer";
import CategoriesMain from "./components/main";
import MainMapping from "./components/MainMapping";
import Navbar from "./components/navbar";
import Hero from "./components/Swiper";

function App() {
  return (
    <div className=" m-auto w-[1200px]">
      <Navbar />
      <Hero />
      <div className="flex">
        <CategoriesMain />
        <MainMapping />
      </div>
      <Footer />
    </div>
  );
}

export default App;
