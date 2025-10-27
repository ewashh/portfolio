'use client';
import '@/app/components/section/section.scss';
import Button from '../button/button';
import useAnimateOnScroll from '../../scripts/animateOnScroll';
import React, { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  classes?: string;
  subheading?: string;
  heading?: string;
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description?: string;
  subtext?: string;
  items?: string[];
  children?: React.ReactNode;
  type?: 'work';
  button?: {
    text: string;
    hoverText?: string;
    href?: string;
    type?: 'big',
    style?: 'primary' | 'secondary'
  };
  theme?: 'light' | 'grey' | 'dark';
  layout?: '1-2' | '1-1';
};

type DynamicHeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
};

const DynamicHeading: React.FC<DynamicHeadingProps> = ({ type: HeadingTag = 'h2', className, children }) => {
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default function Section({
  id,
  classes,
  subheading,
  heading,
  headingType = 'h2',
  description,
  subtext,
  items,
  children,
  type,
  button,
  theme = 'light',
  layout
}: SectionProps) {
  const [isVisible, elementRef] = useAnimateOnScroll();

  return (
    <section className={`section ${type ? `section--${type}` : ''} ${layout ? `section--${layout}` : ''} ${classes ? classes : ''} theme--${theme}`} id={id}>
      {(subheading || heading || description || subtext || button) &&
        <header className={`animate ${isVisible ? 'animated' : ''}`} ref={elementRef}>
          {subheading && <span className="subheading">{subheading}</span>}
          {heading && <DynamicHeading type={headingType} className="section__heading">{heading}</DynamicHeading>}
          {description && <p className="section__description">{description}</p>}
          {subtext && <p className="section__subtext">{subtext}</p>}
          {button && button.text && button.href && <Button text={button.text} hoverText={button.hoverText} href={button.href} type={button.type} style={button.style} />}
        </header>
      }

      {items && (
        <ul className={`section__list animate animate-2 ${isVisible ? 'animated' : ''}`}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {children && (
        <div className={`animate ${(subheading || heading || description || subtext || button ? 'animate-2' : '' )} ${isVisible ? 'animated' : ''}`} style={{ width: '100%' }} ref={elementRef}>
          {children}
        </div>
      )}
    </section>
  );
}
