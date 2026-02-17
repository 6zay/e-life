
import React from 'react';

interface SocialButtonProps {
  label: string;
  href?: string;
  colorClass: string;
  icon?: React.ReactNode;
  isInstagram?: boolean;
  isTextOnly?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ 
  label, 
  href, 
  colorClass, 
  icon,
  isInstagram,
  isTextOnly,
  onClick
}) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`
        w-full 
        flex 
        items-center 
        ${isTextOnly ? 'justify-center py-8' : 'justify-start h-20'} 
        px-4 
        ${colorClass} 
        ${isInstagram ? 'hover:opacity-90 transition-opacity' : 'hover:brightness-110'}
        shadow-lg 
        transform 
        transition-all 
        duration-300 
        hover:-translate-y-1 
        active:scale-95
        overflow-hidden
        cursor-pointer
        border-none
        appearance-none
      `}
    >
      {!isTextOnly && icon && (
        <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-md flex items-center justify-center mr-4 border border-white/20">
          {icon}
        </div>
      )}
      
      <span className={`
        text-white 
        font-black 
        ${isTextOnly ? 'text-xl text-center' : 'text-2xl'} 
        tracking-tight 
        uppercase
        ${isTextOnly ? 'leading-tight px-4' : ''}
      `}>
        {label}
      </span>
    </Component>
  );
};
