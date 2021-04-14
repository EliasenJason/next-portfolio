import { Container, StyledName } from './styled/styled-educationCard'

const EducationCard = ({children}) => {
    return <Container>{children}</Container>
}
EducationCard.Name = ({children}) => {
    return <StyledName>{children}</StyledName>
}

export default EducationCard