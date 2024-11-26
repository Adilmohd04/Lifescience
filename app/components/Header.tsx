import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between md:justify-start items-center p-4 w-full">
      <img 
        src="/logo.png" 
        alt="logo"  
        className="head-image w-32 sm:w-32 md:w-64 lg:w-72" 
        loading="lazy" 
      />
    </div>
  );
};

export default Header;
