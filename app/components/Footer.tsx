import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#17414F] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Phone Section */}
          <div className="bg-[#1B5A68] p-4 rounded-md flex items-center">
            <Image src="/phone.svg" alt="Phone Icon" width={30} height={30} />
            <div className="ml-4">
              <p className="font-bold text-base">Phone Number</p>
              <p className="text-sm">+974 3118 1843</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-[#1B5A68] p-4 rounded-md flex items-center">
            <Image src="/email.svg" alt="Email Icon" width={30} height={30} />
            <div className="ml-4">
              <p className="font-bold text-base">Email Address</p>
              <p className="text-sm">Elbrithcahr@gmail.com</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-[#1B5A68] p-4 rounded-md flex items-center">
            <Image src="/location.svg" alt="Location Icon" width={30} height={30} />
            <div className="ml-4">
              <p className="font-bold text-base">Office Location</p>
              <p className="text-sm">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        {/* Logo and Description Section */}
        <div className="flex flex-col md:flex-row items-start mt-8 gap-6 md:gap-12">
          <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
            <Image src="/logo.png" alt="Elbrit Logo" width={180} height={50} />
          </div>

          <div className="bg-transparent p-4 rounded-md">
            <p className="text-xs text-white max-w-lg leading-relaxed">
              Your health, physical, and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
            </p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-6 text-left text-xs">
          <p>
            © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
