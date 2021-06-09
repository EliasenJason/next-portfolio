import { Container, StyledCardContainer, StyledHeader,StyledExplination } from "./styled/styled-knowledge"
import Card from "./containers/cards/Card"
import data from "../public/data/logos"

const Knowledge = ({children}) => {
    return <Container>{children}</Container>
}

Knowledge.Header = ({children}) => {
    return <StyledHeader>{children}</StyledHeader>
}

Knowledge.Explination = ({children}) => {
    return <StyledExplination>{children}</StyledExplination>
}

Knowledge.Cards = () => {
    return (
        <StyledCardContainer>
        {data.map(item => {
            return (
                <Card logo={item.svg} name={item.name} />
            )
        })}
        </StyledCardContainer>
    )
}
export default Knowledge