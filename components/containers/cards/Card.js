import { StyledCardLogo, StyledCardName, StyledCard } from "./styled/styled-card"

const Card = ({children, logo, name}) => {
    return (
        <StyledCard>
            <StyledCardLogo dangerouslySetInnerHTML={{__html: logo}}></StyledCardLogo>
            <StyledCardName>{name}</StyledCardName>
        </StyledCard>
    )
}
export default Card