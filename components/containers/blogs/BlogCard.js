import Blog from "./styled/Blog"
import Router from 'next/router'

//need to limit characters possible in twitter text to prevent overflow




const BlogCard = ({blogData, deleteAble}) => {
    const handleDelete = () => {
        fetch('http://localhost:3000/api/blogs/' + blogData._id, {method: 'DELETE'})
        .then(Router.reload(window.location.pathname))
    }
    return (
        <Blog>
            <Blog.DescriptionContainer>
                <Blog.Title>{blogData.title}</Blog.Title>
                <Blog.Date>{blogData.date}</Blog.Date>
                <Blog.CatchPhrase>{blogData.blogCatchPhrase}</Blog.CatchPhrase>
                <Blog.TwitterText>{blogData.tweet}</Blog.TwitterText>
                {deleteAble ? <button onClick={handleDelete}>Delete</button> : null }<Blog.ReadMoreButton>Read More</Blog.ReadMoreButton>
            </Blog.DescriptionContainer>
        </Blog>
    )
}

export default BlogCard