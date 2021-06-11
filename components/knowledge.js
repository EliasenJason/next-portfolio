import { Container, StyledCardContainer, StyledHeader,StyledExplination, StyledGoalContainer, StyledGoal, StyledGoalText } from "./styled/styled-knowledge"
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

Knowledge.GoalsContainer = ({children}) => {
    return <StyledGoalContainer>{children}</StyledGoalContainer>
}

Knowledge.GoalsIcon = ({Svg, text}) => {
    return (
        <StyledGoal>
            <Svg />
            <StyledGoalText>{text}</StyledGoalText>
        </StyledGoal>
    )
}

Knowledge.Cards = () => {
    return (
        <StyledCardContainer>
        {data.map(item => {
            return (
                <Card logo={item.svg} name={item.name} key={item.name}/>
            )
        })}
        </StyledCardContainer>
    )
}
export default Knowledge