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
        id="about"
        heading="About"
      >
        <p className="section__description">I’m a front-end developer and UI designer with over a decade of professional experience ranging from small, digital agencies to big software companies. Over the past few years, I’ve been focusing on Shopify since becoming an official theme partner, with my first theme accepted into the official Shopify Theme Store.</p>
        <p className="section__subtext">📍 Southampton, UK</p>
      </Section>
      <Section
        id="big-brands"
        subheading="I've worked with"
        heading="Big Brands"
        items={[
          "BBC", "John Lewis", "Barclaycard", "Expedia", 
          "Topshop", "River Island", "New Look", "Yodel"
        ]}
        theme="grey"
      >
      </Section>
      <Section
        id="tech"
        heading="Technical Expertise"
        description="Throughout my career, I've used a wide variety of
          tools and technologies, each playing a crucial role in
          my professional growth and the success of my
          projects."
        items={[
          "HTML", "SCSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "Jest", "Git", "Npm", "Yarn", 
          "Storybook", "Shopify", "Liquid", "Contentful", "Wordpress", "Figma"
        ]}
      >
      </Section>
      <Section
        id="no-plans"
        type="work"
        subheading="Featured work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shopify Plus"
        heading="Shopify Store"
        description="Store I’ve worked on in collaboration with No Plans. My job was to convert Figma designs into a Shopify theme."
        theme="grey"
      >
        <ul>
          <li>
            <a href="https://about---blank.com/" target="_blank">
              <Image
                src="/about-blank.png"
                width={1248}
                height={704}
                alt="about:blank preview"
              />
            </a>
            <h3>about:blank</h3>
            <a href="https://about---blank.com/" target="_blank">Visit website</a>
          </li>
        </ul>
      </Section>
      <Section
        id="takeout"
        subheading="Featured work"
        heading="Takeout"
        description="A Shopify theme for physical businesses ready to scale online. Originally designed for restaurants and food sellers, it now supports a broad range of merchants. Fully designed and developed by me."
        type="work"
        button={{
          text: 'View on Shopify Theme Store',
          href: 'https://themes.shopify.com/themes/takeout/'
        }}
      >
        <ul>
          <li>
            <a href="https://themes.shopify.com/themes/takeout/" target="_blank">
              <Image
                src="/takeout.png"
                width={1248}
                height={704}
                alt="Takeout preview"
              />
            </a>
          </li>
        </ul>
      </Section>
      <Section
        id="demo-stores"
        type="work"
        subheading="Featured work"
        heading="Shopify Stores"
        description="Demo stores for Takeout theme. Fully designed and developed by me. "
        theme="grey"
      >
        <ul>
          <li>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">
              <Image
                src="/macho-nacho.png"
                width={2000}
                height={1128}
                alt="Macho Nacho preview"
              />
            </a>
            <h3>Macho Nacho</h3>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://potion-demo.myshopify.com/" target="_blank">
              <Image
                src="/potion.png"
                width={2000}
                height={1128}
                alt="Potion preview"
              />
            </a>
            <h3>Potion</h3>
            <a href="https://potion-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">
              <Image
                src="/naughty-vegan.png"
                width={2000}
                height={1128}
                alt="Naughty Vegan preview"
              />
            </a>
            <h3>Naughty Vegan</h3>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">
              <Image
                src="/crumbs.png"
                width={2000}
                height={1128}
                alt="Crumbs preview"
              />
            </a>
            <h3>Crumbs</h3>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://orchid-demo-store.myshopify.com/" target="_blank">
              <Image
                src="/orchid.png"
                width={2000}
                height={1128}
                alt="Orchid preview"
              />
            </a>
            <h3>Orchid</h3>
            <a href="https://orchid-demo-store.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">
              <Image
                src="/casa-italiana.png"
                width={2000}
                height={1128}
                alt="Casa Italiana preview"
              />
            </a>
            <h3>Casa Italiana</h3>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">
              <Image
                src="/wasabi.png"
                width={2000}
                height={1128}
                alt="Wasabi preview"
              />
            </a>
            <h3>Wasabi</h3>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
        </ul>
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
        id="ecom-noon"
        type="work"
        subheading="Featured work"
        heading="ECOM NOON"
        description="A Next.js website I designed and developed for Ecom Noon."
        button={{
          text: 'Visit Website',
          hoverText: 'ecomnoon.com',
          href: 'https://ecomnoon.com/'
        }}
        theme="grey"
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
        id="dot-studio"
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
        id="wordpress"
        type="work"
        subheading="Featured work"
        heading="Wordpress"
        description="Websites I’ve worked on while at Chaptr."
        theme="grey"
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
    </main>
    <Footer/>
    </>
  );
}
