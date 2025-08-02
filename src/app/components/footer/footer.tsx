import '@/app/components/footer/footer.scss'
import Section from '../section/section';

export default function Footer() {
  return (
    <div className="main-footer">
      <Section
        heading="Like What You See?"
        description="I'm available for project-based or ad-hoc arrangements."
        button={{
          text: "Let's work together!",
          hoverText: 'ewafreelancer@gmail.com',
          href: 'mailto:ewafreelancer@gmail.com',
          type: 'big',
          style: 'primary'
        }}
        theme='dark'
      >
      </Section>
      <footer>
        <small>© 2024 - {(new Date().getFullYear())}, Ewa Morriss</small>
      </footer>
    </div>
  );
}
