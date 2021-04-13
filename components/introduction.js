import { Container, StyledTitle, StyledDescription, StyledPicture, StyledName } from './styled/styled-introduction'

const Introduction = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

Introduction.Name = ({children}) => {
    return <StyledName>{children}</StyledName>
}

Introduction.Title = ({children}) => {
    return <StyledTitle>{children}</StyledTitle>
}

Introduction.Description = ({children}) => {
    return <StyledDescription>{children}</StyledDescription>
}

Introduction.Picture = ({children, src, alt}) => {
    return <StyledPicture src={src} alt={alt}>{children}</StyledPicture>
}


export default Introduction