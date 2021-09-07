import Blog from "./styled/Blog"

//need to limit characters possible in twitter text so prevent overflow

const BlogCard = () => {
    return (
        <Blog>
            <Blog.DescriptionContainer>
                <Blog.Title>Title</Blog.Title>
                <Blog.Date>Date</Blog.Date>
                <Blog.CatchPhrase>Catch Phrase</Blog.CatchPhrase>
                <Blog.TwitterText>let this be main sodales egestas. Integer aliquam ut elit sit amet dictum. Fusce vitae sodales tortor, nec sagittis mauris. Nam id auctor ex, ut laoreet velit. Cras suscipit diam est, et lacinia massa sollicitudin eu. In ullamcorper volutpat magna ut suscipit. Fusce convallis lectus enim.</Blog.TwitterText>
                <Blog.ReadMoreButton>Read More</Blog.ReadMoreButton>
            </Blog.DescriptionContainer>
        </Blog>
    )
}

export default BlogCard