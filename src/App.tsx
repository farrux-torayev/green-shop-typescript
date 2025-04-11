import "./App.css";
import Footer from "./components/footer";
import CategoriesMain from "./components/main";
import MainMapping from "./components/MainMapping";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className=" m-auto w-[1200px]">
      <Navbar />
      <div className="flex">
        <CategoriesMain />
        <MainMapping />
      </div>
      <Footer />
    </div>
  );
}

export default App;
