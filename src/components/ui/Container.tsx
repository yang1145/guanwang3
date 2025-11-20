import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'small' | 'medium' | 'large' | 'full';
}

export default function Container({ 
  children, 
  maxWidth = 'large', 
  className = '', 
  ...props 
}: ContainerProps) {
  const maxWidthClasses = {
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const classes = `mx-auto px-4 ${maxWidthClasses[maxWidth]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}