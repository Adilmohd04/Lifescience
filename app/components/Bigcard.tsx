import React from "react";
import Image from "next/image";

interface BigCardProps {
  src: string;
  title: string;
  date?: string;
  className?: string; 
}

const BigCard: React.FC<BigCardProps> = ({ src, title, date, className }) => {
  return (
    <div
      className={`relative w-[320px] h-[400px] rounded-2xl bg-white shadow-lg ${className}`}
    >
      <Image
        src={src}
        alt="image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl filter brightness-50"
        loading="lazy" 
      />
      <div className="absolute z-10 top-28 left-8 right-0 w-[240px]">
        <h2 className="text-2xl text-white font-semibold capitalize">{title}</h2>
      </div>
      {date && (
        <div className="px-4 py-2 w-fit  text-white bg-[#003569] rounded-r-3xl absolute top-6 -left-2">
          {date}
        </div>
      )}
    </div>
  );
};

export default BigCard;
