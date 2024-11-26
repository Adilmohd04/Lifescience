import React from "react";
import Ingredientcard from "./Ingredientcard";

const Ingredients = () => {
  return (
       <section className="h-auto md:px-16 px-6 py-12 w-full mt-12 mb-1 flex flex-wrap gap-10 justify-center">

      <div className="w-[26rem]">
        <h4 className="text-lg uppercase font-semibold text-[#17414F]">
          ingredients
        </h4>
        <h2 className="text-5xl font-bold capitalize text-[#17414F] mt-1">
          Better ingredients
        </h2>
        <p className="text-sm text-[#727272] mt-6">
          Only the best when you choose products offered on our platform
          high-quality ingredients for high-quality products!
        </p>
      </div>

      <Ingredientcard
        src="/vitaminc.png"
        title="Vitamin c"
        description="Vitamin C as ascorbic acid"
      />
      <Ingredientcard
        src="/vitaminb3.png"
        title="Vitamin b3"
        description="Niacin for healthy gut and skin"
      />
      <Ingredientcard
        src="/magnesium.png"
        title="Magnesium"
        description="Boost energy and support muscle function"
      />
      <Ingredientcard
        src="/hyalu.png"
        title="Hyaluronic Acid"
        description="For smooth, supple and soft skin!"
      />
      <Ingredientcard
        src="/lacto.png"
        title="Lactobacillus"
        description="Invigorate your gut microbiome"
      />

      <div className="flex-col py-6 hidden md:block">
        <div className="h-16 w-16 rounded-br-full bg-sky-300"></div>
        <div className="h-16 w-16 rounded-full bg-yellow-400 mt-8"></div>
      </div>
    </section>
  );
};

export default Ingredients;
