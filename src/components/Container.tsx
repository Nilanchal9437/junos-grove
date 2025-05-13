import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full mx-auto px-4 
      sm:max-w-[640px] sm:px-6 
      md:max-w-[768px] 
      lg:max-w-[1024px] lg:px-8 
      xl:max-w-[1280px]
      ${className}`}>
      {children}
    </div>
  );
};

export default Container; 