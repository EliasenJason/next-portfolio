import { Header } from "../../components"
import Link from 'next/link'

        

const CurrentBlogs = () => {
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
        
        </>
    )
}

export default CurrentBlogs