import HeadTag from './headtag'
import { Fast, Clean, Responsive } from '../public/data/svgs'
import { Header, Introduction, Knowledge } from '../components/index'
import ContactFormContainer from '../components/containers/contact/ContactForm'
import { useState } from 'react'


export default function Home() {

  const [isContactOpen, setIsContactOpen] = useState(false)
  
  return (
    <>
    <HeadTag />
    <Header>
      <Header.Logo src="/pictures/logo.svg" alt="my logo"/>
      <Header.Nav>
        <Header.NavItem onClick={() => setIsContactOpen(true)} isContactOpen={isContactOpen}>Say Hello?</Header.NavItem>
      </Header.Nav>
    </Header>
    <ContactFormContainer setIsContactOpen={setIsContactOpen} isContactOpen={isContactOpen}/>
    <Introduction>
      <Introduction.Name>Jason Eliasen</Introduction.Name>
      <Introduction.Title>Learner & Web Developer</Introduction.Title>
      <Introduction.Description>A self-educated and self-motivated web developer from Grande Prairie, Alberta. Enjoys learning modern web development in his spare time.</Introduction.Description>
      <Introduction.Picture src="/pictures/cartoonme.png" alt="cartoon of me created by my daughter"></Introduction.Picture>
    </Introduction>
    <Knowledge>
      <Knowledge.GoalsContainer>
        <Knowledge.GoalsIcon Svg={Clean} text={'I write clean and up to date ES6 code so it can be easily understood'} />
        <Knowledge.GoalsIcon Svg={Fast} text={'I ensure my code runs fast by using the most up to date technology'} />
        <Knowledge.GoalsIcon Svg={Responsive} text={'My work look good on any device!'} />
      </Knowledge.GoalsContainer>
      <Knowledge.Header>What kind of tech do i use?</Knowledge.Header>
      <Knowledge.Explination>A variety of frameworks, libraries and languages that I have had the opportunity to utilize.</Knowledge.Explination>
      <Knowledge.Cards />
    </Knowledge>
    </>
  )
}
