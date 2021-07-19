import { BlogContainer, BlogHeaderContainer, BlogTitle, BlogDate, BlogCatchPhrase, BlogLinkContainer, BlogLink, BlogTwitterLink } from "./styled/styled-blogs";

//TODO STYLE THIS SUCKA!

const Blog = ({blogData, index}) => {
    //create onclick for blog to pass data full page article passing props along with text
    console.log(blogData)
    return (
        <BlogContainer>
            <BlogHeaderContainer>
                <BlogTitle>{blogData.title}</BlogTitle>
                <BlogDate>{blogData.date}</BlogDate>
            </BlogHeaderContainer>
            <BlogCatchPhrase>{blogData.blogCatchPhrase}</BlogCatchPhrase>
            <BlogLinkContainer>
                <BlogLink>{blogData.tech}</BlogLink>
                <BlogTwitterLink>{blogData.twitterLink}</BlogTwitterLink>
            </BlogLinkContainer>
        </BlogContainer>
    )
}

export default Blog