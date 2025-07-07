'use client';
import '@/app/components/header/header.scss';
import Section from '../section/section';
import Button from '../button/button';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          <div>
            <li><a href="https://www.linkedin.com/in/ewa-morriss-858828114/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/ewashh" target="_blank">GitHub</a></li>
          </div>
          <li className="desktop-only"><a href="mailto:ewafreelancer@gmail.com">ewafreelancer@gmail.com</a></li>
        </ul>
      </nav>
      <Section
        classes="main-header__inner"
        theme="dark"
      >
        <h1 className="section__heading">Developer <span>Meets</span> Designer</h1>
        <p className="section__description">I’m a front-end developer and UI designer with over a decade of professional experience ranging from small, digital agencies to big software companies. Over the past few years, I’ve been focusing on Shopify since becoming an official theme partner, with my first theme accepted into the official Shopify Theme Store.</p>
        <p className="section__subtext">📍 Southampton, UK</p>
        <Button text='Say Hello!' hoverText='ewafreelancer@gmail.com' style="primary" href="mailto:ewafreelancer@gmail.com" type="big" />
      </Section>
    </header>
  );
}
