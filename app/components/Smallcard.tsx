import React from "react";
import Image from "next/image";

interface SmallCardProps {
  src: string;
  title: string;
  date?: string;
  className?: string; 
}

const SmallCard: React.FC<SmallCardProps> = ({ src, title, date, className }) => {
  return (
    <div
      className={`relative w-[320px] h-[160px] rounded-2xl shadow-md  ${className}`}
    >
      <Image
        src={src}
        alt="blog image"
        layout="fill"
        objectFit="cover"
        style={{ objectFit: 'contain' }} 
        className="rounded-2xl filter brightness-50"
        loading="lazy" 
      />
      <div className="absolute z-10 top-16 left-8 right-0 w-[220px]">
        <h2 className="text-lg text-white font-semibold capitalize">{title}</h2>
      </div>
      {date && (
        <div className="px-4 py-2 w-fit  text-white bg-[#003569] rounded-r-3xl absolute top-6 -left-2">
          {date}
        </div>
      )}
    </div>
  );
};

export default SmallCard;
