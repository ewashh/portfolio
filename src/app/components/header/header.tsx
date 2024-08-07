'use client';
import '@/app/components/header/header.scss';
import Section from '../section/section';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          <div>
            <li><a href="https://www.linkedin.com/in/ewa-szymanska-858828114/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/ewashh" target="_blank">GitHub</a></li>
          </div>
          <li className="desktop-only"><a href="mailto:ewafreelancer@gmail.com">ewafreelancer@gmail.com</a></li>
        </ul>
      </nav>
      <Section
        heading="Developer Meets Designer"
        headingType="h1"
        description="I’m a front-end developer and UI designer with over a decade
        of professional experience ranging from small, digital agencies
        to big software companies."
        subtext="📍 Southampton, UK"
        button={{
          text: 'Say Hello!',
          hoverText: 'ewafreelancer@gmail.com',
          href: 'mailto:ewafreelancer@gmail.com',
          type:'big'
        }}
        classes="main-header__inner"
      >
      </Section>
    </header>
  );
}
