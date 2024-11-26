import React from "react";

function Product() {
  const list = [
    {
      src: "/lab.svg",
      title: "Clinically Studied",
      desc: "All products that we offer have undergone lab and safety tests",
    },
    {
      src: "/leaf.svg",
      title: "Vegetarian Friendly",
      desc: "We have a wide selection of vegetarian products to meet your needs.",
    },
    {
      src: "/flag.svg",
      title: "Made In India",
      desc: "Shop local and explore health products made right here in India.",
    },
    {
      src: "/shipping.svg",
      title: "Free Shipping",
      desc: "We deliver to your door with no shipping costs on your orders.",
    },
    {
      src: "/risk.svg",
      title: "No Risk",
      desc: "We ensure that all products are safe and within their use-by date.",
    },
    {
      src: "/gmo.svg",
      title: "GMO Free",
      desc: "Natural, no modified products and derivatives for those who need it.",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 -translate-y-[180px] -mb-[150px]">
      <div className="w-full md:max-w-[75%] min-w-[50%] bg-[#17414F] rounded-[50px] flex gap-12 flex-wrap justify-center">
        {list.map((list, index) => (
          <div
            className="flex flex-col items-center gap-3 max-w-[280px] py-4 -translate-y-[50px]"
            key={index}
          >
            <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
              <img
                className="w-[30px]"
                src={list.src}
                alt={list.title}
                style={{ objectFit: 'contain' }} 

                loading="lazy"
              />
            </div>
            <h1 className="text-white text-xl font-semibold">{list.title}</h1>
            <p className="text-white font-light text-center text-sm">
              {list.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
