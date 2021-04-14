import HeadTag from './headtag'
import { Header, Introduction, Education } from '../components/index'
import EducationCards from '../containers/Container-EducationCard'
import cardData from '../public/data/education'

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
      <Introduction.Description>I play with tech and I love what I do.</Introduction.Description>
      <Introduction.Picture src="/pictures/cartoonme.png" alt="cartoon of me created by my daughter"></Introduction.Picture>
    </Introduction>
    <Education>
      <Education.HeadLine>With no formal education how did i get to where I am?</Education.HeadLine>
      <EducationCards data={cardData}></EducationCards>
    </Education>
    </>
  )
}
