import { Header, Blog } from "../../components"
import Link from 'next/link'
import BlogCard from '../../components/containers/blogs/BlogCard'
import { useState, useEffect } from "react"

        

const CurrentBlogs = () => {
    const [blogs, setBlogs] = useState()

    //fetch all blogs from database and put into state
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
        .then((res) => res.json())
        .then((json) => {
        setBlogs(json)
        })
    },[])

    return (
        <>
        <Header>
            <Link href="/">
                <a><Header.Logo src="/pictures/logo.svg" alt="my logo"/></a>
            </Link>
            <Header.Nav>
                <Link href="/admin/createBlog">
                <a><Header.NavItem>Create blog</Header.NavItem></a>
                </Link>
            </Header.Nav>
        </Header>
    <Blog>
      {blogs && blogs.data.map((blogdata, index) => {
        return (
          <BlogCard blogData={blogdata} key={index} deleteAble={true}></BlogCard>
        )
      })}
    </Blog>
        </>
    )
}

export default CurrentBlogs