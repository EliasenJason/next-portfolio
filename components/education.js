import { Container, StyledHeadLine } from './styled/styled-education'

const Education = ({children}) => {
    return <Container>{children}</Container>
}

Education.HeadLine = ({children}) => {
    return <StyledHeadLine>{children}</StyledHeadLine>
}

export default Education