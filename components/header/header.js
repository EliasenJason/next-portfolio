import { MyNameStyled, Container } from './styled/header-styled.js'

const Header = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}

Header.MyName = ({children, ...restProps}) => {
    return <MyNameStyled {...restProps}>{children}</MyNameStyled>
}

export default Header