import HeadTag from './headtag'
import { Header, Introduction, Knowledge } from '../components/index'

export default function Home() {
  return (
    <>
    <HeadTag />
    <Header>
      <Header.Logo src="/pictures/logo.svg" alt="my logo"/>
      <Header.Nav>
        <Header.NavItem>Say Hello?</Header.NavItem>
      </Header.Nav>
    </Header>
    <Introduction>
      <Introduction.Name>Jason Eliasen</Introduction.Name>
      <Introduction.Title>Learner & Web Developer</Introduction.Title>
      <Introduction.Description>A self-educated and self-motivated web developer from Grande Prairie, Alberta. Enjoys learning modern web development in his spare time.</Introduction.Description>
      <Introduction.Picture src="/pictures/cartoonme.png" alt="cartoon of me created by my daughter"></Introduction.Picture>
    </Introduction>
    <Knowledge>
      <Knowledge.Header>What kind of tech do i use?</Knowledge.Header>
      <Knowledge.Explination>A variety of frameworks, libraries and languages that I have had the opportunity to utilize</Knowledge.Explination>
      <Knowledge.Cards />
    </Knowledge>
    </>
  )
}
