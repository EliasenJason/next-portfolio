import Blog from "./styled/Blog"

//need to limit characters possible in twitter text so prevent overflow



const BlogCard = ({blogData, key}) => {
    console.log(blogData)
    return (
        <Blog>
            <Blog.DescriptionContainer>
                <Blog.Title>{blogData.title}</Blog.Title>
                <Blog.Date>{blogData.date}</Blog.Date>
                <Blog.CatchPhrase>{blogData.blogCatchPhrase}</Blog.CatchPhrase>
                <Blog.TwitterText>{blogData.tweet}</Blog.TwitterText>
                <Blog.ReadMoreButton>Read More</Blog.ReadMoreButton>
            </Blog.DescriptionContainer>
        </Blog>
    )
}

export default BlogCard