import { Container, DescriptionContainer, Title, Date, CatchPhrase, TwitterText, ReadMoreButton, DeleteButton } from "./styled-blogs";

const Blog = ({children}) => {
    return <Container>{children}</Container>
}
Blog.DescriptionContainer = ({children}) => {
    return <DescriptionContainer>{children}</DescriptionContainer>
}
Blog.Title = ({children}) => {
    return <Title>{children}</Title>
}
Blog.Date = ({children}) => {
    return <Date>{children}</Date>
}
Blog.CatchPhrase = ({children}) => {
    return <CatchPhrase>{children}</CatchPhrase>
}
Blog.TwitterText = ({children}) => {
    return <TwitterText>{children}</TwitterText>
}
Blog.ReadMoreButton = ({children}) => {
    return <ReadMoreButton>{children}</ReadMoreButton>
}

export default Blog
