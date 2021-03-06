import { Fast, Clean, Responsive } from '../public/data/svgs'
import { Header, Introduction, Knowledge, HeadTag, Blog } from '../components/index'
import ContactFormContainer from '../components/containers/contact/ContactForm'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import BlogCard from '../components/containers/blogs/BlogCard'

export default function Home() {

  const [isContactOpen, setIsContactOpen] = useState(false)
  const [blogs, setBlogs] = useState()

  //fetch all blogs from database and put into state
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then((json) => {
      setBlogs(json)
    })
  },[])

  //hide the contact forms transition off screen on page load:
  const [hideThis, setHideThis] = useState(true)
  useEffect(() => setHideThis(false),[])

  console.log(process.env.MONGO_URI)

  return (
    <>
    <HeadTag />
    <Header>
      <Link href="/admin/currentBlogs">
        <a><Header.Logo src="/pictures/logo.svg" alt="my logo"/></a>
      </Link>
      <Header.Nav>
        <Header.NavItem onClick={() => setIsContactOpen(true)} isContactOpen={isContactOpen}>Say Hello?</Header.NavItem>
      </Header.Nav>
    </Header>
    {hideThis ? null : <ContactFormContainer setIsContactOpen={setIsContactOpen} isContactOpen={isContactOpen}/>}
    <Introduction>
      <Introduction.Name>Jason Eliasen</Introduction.Name>
      <Introduction.Title>Learner & Web Developer</Introduction.Title>
      <Introduction.Description>A self-educated and self-motivated web developer from Grande Prairie, Alberta. Enjoys learning modern web development in his spare time.</Introduction.Description>
      <Introduction.Picture src="/pictures/cartoonme.png" alt="cartoon of me created by my daughter"></Introduction.Picture>
    </Introduction>
    <Knowledge>
      <Knowledge.GoalsContainer>
        <Knowledge.GoalsIcon Svg={Clean} text={'Clean and modern ES6 code that is easily understood'} />
        <Knowledge.GoalsIcon Svg={Fast} text={'I ensure my code runs fast by using the most up to date technology'} />
        <Knowledge.GoalsIcon Svg={Responsive} text={'My work look good on any device!'} />
      </Knowledge.GoalsContainer>
      <Knowledge.Header>What kind of tech do i use?</Knowledge.Header>
      <Knowledge.Explination>A variety of frameworks, libraries and languages that I have had the opportunity to utilize. Infact, almost all this will be used on this webpage!</Knowledge.Explination>
      <Knowledge.Cards />
    </Knowledge>
    <Blog>
      {blogs && blogs.data.map((blogdata, index) => {
        return (
          <BlogCard blogData={blogdata} key={index}></BlogCard>
        )
      })}
    </Blog>
    

    {/* <BlogSection>
    {blogs && blogs.data.map((blogdata, index) => {
      return (
        <Blog blogData={blogdata} key={index}></Blog>
      )
    })}
    </BlogSection> */}
    </>
  )
}
