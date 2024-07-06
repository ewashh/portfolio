'use client'
import React, { useState } from 'react';
import '@/app/components/button/button.scss';

type ButtonProps = {
  text: string;
  hoverText?: string;
  href: string;
  type?: 'big';
  classes?: string;
};

export default function Button({ text, hoverText, href, type, classes }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isExternalLink = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternalLink ? '_blank' : '_self'}
      className={`button ${type ? `button--${type}` : ''} ${classes ? classes : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && hoverText ? hoverText : text}
    </a>
  );
}
