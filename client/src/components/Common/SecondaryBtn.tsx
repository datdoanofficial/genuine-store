import React from "react";
import "./SecondaryBtn.scss";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <a href={to} className="secondary-btn">
      {children}
    </a>
  );
};

export default Link;
