import Header from '../components/header.js'
import Introduction from '../components/introduction.js'

export default function Home() {
  return (
    <>
    <Header>
      <Header.Logo src="/pictures/logo.svg" alt="my logo"/>
      <Header.Nav>
        <Header.NavItem>Say Hello?</Header.NavItem>
      </Header.Nav>
    </Header>
    {/* <Introduction>
      <Introduction.Title>Learner & Web Developer</Introduction.Title>
      <Introduction.Description>I play with tech and I love what i do.</Introduction.Description>
      <Introduction.Picture></Introduction.Picture>
    </Introduction> */}
    </>
  )
}
