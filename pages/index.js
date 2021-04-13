import Header from '../components/header.js'
import Introduction from '../components/introduction.js'
import HeadTag from './headtag'

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
      <Introduction.Description>I play with tech and I love what i do.</Introduction.Description>
      <Introduction.Picture src="/pictures/cartoonme.png" alt="cartoon of me created by my daughter"></Introduction.Picture>
    </Introduction>
    </>
  )
}
