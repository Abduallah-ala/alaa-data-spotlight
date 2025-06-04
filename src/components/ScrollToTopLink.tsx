
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ children, ...props }) => {
  const handleClick = () => {
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
