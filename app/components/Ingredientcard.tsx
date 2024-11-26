import Image, { StaticImageData } from 'next/image';

interface IngredientcardProps {
  src: StaticImageData | string;
  title: string;
  description: string;
}

const Ingredientcard: React.FC<IngredientcardProps> = ({ src, title, description }) => {  
  return (
    <div className="relative">
      <Image
        src={src}
        alt={title}
        width={400}  
        style={{ objectFit: 'contain' }} 

        height={240} 
        className="h-60 w-[25rem] rounded-xl object-cover" 
      />

      <div className="absolute z-10 top-6 left-6"> 
        <h2 className="text-3xl font-semibold text-[#17414F] capitalize"> 
          {title}
        </h2>

        <p className="text-lg text-[#727272]"> 
          {description}
        </p>

        <button className="text-[#17414F] hover:text-[#30839f] underline uppercase font-semibold transition-all duration-300 absolute -bottom-32">
          see more
        </button>
      </div>
    </div>
  );
};

export default Ingredientcard;
