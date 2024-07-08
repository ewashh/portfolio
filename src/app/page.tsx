import '@/app/styles/global.scss';
import Image from 'next/image'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Section
        id="big-brands"
        subheading="I've worked with"
        heading="Big Brands"
        items={[
          "BBC", "John Lewis", "Barclaycard", "Expedia", 
          "Topshop", "River Island", "New Look", "Yodel"
        ]}>
      </Section>
      <Section
        id="tech"
        heading="Technical Expertise"
        description="Throughout my career, I've used a wide variety of
          tools and technologies, each playing a crucial role in
          my professional growth and the success of my
          projects."
        items={[
          "HTML", "SCSS", "JavaScript", "React", "Next.js", "Gatsby", "Git", 
          "Storybook", "Shopify", "Liquid", "Contentful", "Wordpress", "Figma"
        ]}>
      </Section>
      <Section
        id="takeout"
        subheading="Featured work"
        heading="Takeout"
        description="A Shopify theme designed for restaurant owners and food sellers."
        type="work"
        button={{
          text: 'View on Shopify Theme Store',
          href: 'https://themes.shopify.com/themes/takeout/styles/caramel'
        }}
      >
        <ul>
          <li>
            <Image
              src="/crumbs.png"
              width={292}
              height={158}
              alt="Crumbs preview"
            />
            <h3>Crumbs</h3>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <Image
              src="/macho-nacho.png"
              width={292}
              height={158}
              alt="Macho Nacho preview"
            />
            <h3>Macho Nacho</h3>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <Image
              src="/naughty-vegan.png"
              width={292}
              height={158}
              alt="Naughty Vegan preview"
            />
            <h3>Naughty Vegan</h3>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <Image
              src="/casa-italiana.png"
              width={292}
              height={158}
              alt="Casa Italiana preview"
            />
            <h3>Casa Italiana</h3>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <Image
              src="/wasabi.png"
              width={292}
              height={158}
              alt="Wasabi preview"
            />
            <h3>Wasabi</h3>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
        </ul>
      </Section>
      <Section
        id="birch"
        type="work"
        subheading="Featured work"
        heading="Birch"
        description="A React-based component library I developed for Baresquare."
        button={{
          text: 'Visit Storybook',
          hoverText: 'birch.baresquare.com',
          href: 'https://birch.baresquare.com/'
        }}
      >
        <iframe src="https://birch.baresquare.com/"></iframe>
      </Section>
      <Section
        id="wordpress"
        type="work"
        subheading="Featured work"
        heading="Wordpress"
        description="Websites I’ve worked on while at Chaptr."
      >
        <ul>
          <li>
            <Image
              src="/domino-publishing.png"
              width={1200}
              height={649}
              alt="Domino publishing preview"
            />
            <h3>Domino Publishing</h3>
            <a href="https://dominopublishingco.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <video autoPlay loop muted width="100%">
              <source src="/doublesixrights-optimised.webm" type="video/webm" />
            </video>
            <h3>Double Six Rights</h3>
            <a href="https://www.doublesixrights.com/" target="_blank">Visit website</a>
          </li>
        </ul>
      </Section>
      <Section
        heading="Like What You See?"
        description="I am open to project-based or ad-hoc arrangements, offering you flexibility to meet your
        evolving needs."
        button={{
          text: "Let's work together!",
          hoverText: 'ewafreelancer@gmail.com',
          href: 'mailto:ewafreelancer@gmail.com',
          type: 'big'
        }}
      >
      </Section>
    </main>
    <Footer/>
    </>
  );
}
