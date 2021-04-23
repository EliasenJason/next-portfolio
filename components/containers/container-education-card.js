// Education.Card = (props) => {
//     return (
//         <StyledCard>
//             <StyledCardInner>
//                 <StyledCardFront>FRONT</StyledCardFront>
//                 <StyledCardBack>BACK</StyledCardBack>
//             </StyledCardInner>
//         </StyledCard>
//     )
// }

import { Education } from '../index'

const FlipCard = ({name, picture}) => {
    return (
        <Education.FlipCard>
            <Education.FlipCardInner>
                <Education.FlipCardFront>{picture}</Education.FlipCardFront>
                <Education.FlipCardBack>{name}</Education.FlipCardBack>
            </Education.FlipCardInner>
        </Education.FlipCard>
    )
}

export default FlipCard