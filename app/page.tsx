import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tablets from "./components/Tablets";
import Ingredients from "./components/Ingredient";
import Product from "./components/Product";
import Essential from "./components/Essential";

export default function Home() {
  return (
    <div >
      <Header/>
      <Essential/>
      <Product/>
      <Ingredients/> 
      <Tablets/>
      <Footer/>
    </div>
  );
}
