import { Container, StyledHeadLine, StyledCard, StyledCardInner, StyledCardFront, StyledCardBack } from './styled/styled-education'

const Education = ({children}) => {
    return <Container>{children}</Container>
}

Education.HeadLine = ({children}) => {
    return <StyledHeadLine>{children}</StyledHeadLine>
}


/*FLIP CARD*/

Education.FlipCard = ({children}) => {
    return <StyledCard>{children}</StyledCard>
}
Education.FlipCardInner = ({children}) => {
    return <StyledCardInner>{children}</StyledCardInner>
}
Education.FlipCardFront = ({children}) => {
    return <StyledCardFront>{children}</StyledCardFront>
}
Education.FlipCardBack = ({children}) => {
    return <StyledCardBack>{children}</StyledCardBack>
}

export default Education