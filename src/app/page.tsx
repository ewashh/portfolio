import '@/app/styles/global.scss';
import Image from 'next/image'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';
import Button from './components/button/button';

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
          "HTML", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "Jest", "Git", "Npm", "Yarn", 
          "Storybook", "Shopify", "Liquid", "Contentful", "Wordpress", "Figma"
        ]}>
      </Section>
      <Section
        type="work"
        subheading="Featured work"
        heading="DOT STUDIO"
        description="A Next.js website I designed and developed for DOT STUDIO."
        button={{
          text: 'Visit Website',
          hoverText: 'dotstudio.uk',
          href: 'https://dotstudio.uk/'
        }}
      >
        <a href="https://dotstudio.uk/" target="_blank">
          <Image
            src="/dotstudio.png"
            width={1248}
            height={704}
            alt="Dot Studio preview"
          />
        </a>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <h3>COMPONENT LIBRARY</h3>
        <p className="section__description">A React-based component library I developed for DOT STUDIO.</p>
        <Button text="Visit Storybook" hoverText="dotstudio.uk/storybook" href="https://dotstudio.uk/storybook" />
        <br/><br/><br/>
        <iframe src="https://dotstudio.uk/storybook/"></iframe>
      </Section>
      <Section
        type="work"
        subheading="Featured work"
        heading="ECOM NOON"
        description="A Gatsby website I designed and developed for Ecom Noon."
        button={{
          text: 'Visit Website',
          hoverText: 'ecomnoon.com',
          href: 'https://ecomnoon.com/'
        }}
      >
        <a href="https://ecomnoon.com/" target="_blank">
          <Image
            src="/ecomnoon.png"
            width={1248}
            height={704}
            alt="Ecom Noon preview"
          />
        </a>
      </Section>
      <Section
        id="superrb"
        type="work"
        subheading="Featured work"
        heading="Shopify Stores"
        description="Stores I’ve worked on in collaboration with Superrb. My job was to convert Figma designs into Shopify themes."
      >
        <ul>
          <li>
            <a href="https://rioteliquid.com/" target="_blank">
              <video autoPlay loop muted width="100%">
                <source src="/riot.webm" type="video/webm" />
              </video>
            </a>
            <h3>Riot E-liquid</h3>
            <a href="https://rioteliquid.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://mozzocoffee.com/" target="_blank">
              <Image
                src="/mozzo.png"
                width={1248}
                height={704}
                alt="Mozzo Coffee preview"
              />
            </a>
            <h3>Mozzo Coffee</h3>
            <a href="https://mozzocoffee.com/" target="_blank">Visit website</a>
          </li>
        </ul>
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
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">
              <Image
                src="/crumbs.png"
                width={292}
                height={158}
                alt="Crumbs preview"
              />
            </a>
            <h3>Crumbs</h3>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">
              <Image
                src="/macho-nacho.png"
                width={292}
                height={158}
                alt="Macho Nacho preview"
              />
            </a>
            <h3>Macho Nacho</h3>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">
              <Image
                src="/naughty-vegan.png"
                width={292}
                height={158}
                alt="Naughty Vegan preview"
              />
            </a>
            <h3>Naughty Vegan</h3>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">
              <Image
                src="/casa-italiana.png"
                width={292}
                height={158}
                alt="Casa Italiana preview"
              />
            </a>
            <h3>Casa Italiana</h3>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
          <li>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">
              <Image
                src="/wasabi.png"
                width={292}
                height={158}
                alt="Wasabi preview"
              />
            </a>
            <h3>Wasabi</h3>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">Visit demo store</a>
          </li>
        </ul>
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
            <a href="https://dominopublishingco.com/" target="_blank">
              <Image
                src="/domino-publishing.png"
                width={1200}
                height={649}
                alt="Domino publishing preview"
              />
            </a>
            <h3>Domino Publishing</h3>
            <a href="https://dominopublishingco.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://www.doublesixrights.com/" target="_blank">
              <video autoPlay loop muted width="100%">
                <source src="/doublesixrights-optimised.webm" type="video/webm" />
              </video>
            </a>
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
