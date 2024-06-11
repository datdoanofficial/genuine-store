import React from "react";
import "./SmallBtn.scss";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <a href={to} className="small-btn">
      {children}
    </a>
  );
};

export default Link;
