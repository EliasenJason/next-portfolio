import { Container, StyledLogo, StyledNav, StyledNavItem } from './styled/styled-header'

const Header = ({children}) => {
    return <Container>{children}</Container>
}

Header.Logo = ({children, src, alt}) => {
    return <StyledLogo src={src} alt={alt}>{children}</StyledLogo>
}

Header.Nav = ({children}) => {
    return <StyledNav>{children}</StyledNav>
}

Header.NavItem = ({children, onClick, isContactOpen}) => {
    return <StyledNavItem isContactOpen={isContactOpen} onClick={onClick}>{children}</StyledNavItem>
}

export default Header