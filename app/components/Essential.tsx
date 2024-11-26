"use client"
import React from "react";
import Image from "next/image";
import { GiMedicines } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";

const Button: React.FC<{ text: string; className?: string; onClick?: () => void }> = ({ text, className, onClick }) => (
  <button
    className={`px-6 py-2 rounded-3xl bg-[#17414F] hover:bg-[#225d71] text-white font-semibold transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

const IconCard: React.FC<{ Icon: React.ElementType; title: string; description: string }> = ({ Icon, title, description }) => (
  <div className="flex gap-4 items-center">
    <div className="h-10 w-10 bg-[#17414F] rounded-full flex justify-center items-center text-xl text-white">
      <Icon />
    </div>
    <div>
      <h4 className="text-lg text-[#17414F] font-bold">{title}</h4>
      <p className="text-[#17414F] text-sm">{description}</p>
    </div>
  </div>
);

const Essential = () => {
  return (
    <div className="h-screen bg-[#E2F5FB] flex flex-col justify-start items-center p-4 mb-16">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center text-[#003569] font-bold">Essential Vitamins</h1>
      
      <section className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 mt-8">

        <div className="text-center md:text-left">
          <p className="text-[#003569] text-lg sm:text-xl">Online Medical Supplies</p>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl text-[#003569] font-bold mt-1">
            Get Your Vitamins <br/> & Minerals
          </h4>
          <Button text="Explore" className="mt-4" />
        </div>

        <div className="relative flex justify-center items-center sm:block">
            <div className="absolute bg-[#FFE9B5] rounded-tl-[60px] rounded-br-[60px] w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-[330px] lg:h-[320px] z-0 right-4 top-12 translate-x-180 hidden sm:block" />

            <div className="relative z-10 -mt-16">
                <Image
                src="/probiotic.svg"
                alt="Probiotic Image"
                layout="intrinsic"
                width={400}  
                height={400} 
                loading="lazy"
                style={{ objectFit: 'contain' }} 

                className="rounded-tl-[60px] rounded-br-[60px] hidden sm:block" 
                />
            </div>
            </div>



    

        <div className="flex flex-col gap-9 -mt-20 md:mt-0">
          <IconCard Icon={GiMedicines} title="Vitamins" description="Increased vitamins and minerals in your diet" />
          <IconCard Icon={FaWeight} title="Weight Loss" description="Find scientifically proven solutions for weight loss" />
          <IconCard Icon={MdOutlineEmojiFoodBeverage} title="Functional Foods" description="From protein powders to baby formula" />
        </div>
      </section>
    </div>
  );
};

export default Essential;
