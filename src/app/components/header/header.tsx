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
        <h1 className="section__heading">Developer <br/>Meets Designer</h1>
        <br/><br/>
        <Button text='Say Hello!' hoverText='ewafreelancer@gmail.com' style="primary" href="mailto:ewafreelancer@gmail.com" type="big" />
      </Section>
    </header>
  );
}
