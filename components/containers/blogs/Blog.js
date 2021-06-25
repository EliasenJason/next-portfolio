import { BlogContainer, BlogHeaderContainer, BlogTitle, BlogDate, BlogCatchPhrase, BlogLinkContainer, BlogLink, BlogTwitterLink } from "./styled/styled-blogs";

//TODO STYLE THIS SUCKA!

const Blog = () => {
    return (
        <BlogContainer>
            <BlogHeaderContainer>
                <BlogTitle>this is the title</BlogTitle>
                <BlogDate>date</BlogDate>
            </BlogHeaderContainer>
            <BlogCatchPhrase>catc</BlogCatchPhrase>
            <BlogLinkContainer>
                <BlogLink>link</BlogLink>
                <BlogTwitterLink>twitterLink</BlogTwitterLink>
            </BlogLinkContainer>
        </BlogContainer>
    )
}

export default Blog