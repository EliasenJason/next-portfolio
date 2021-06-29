import styled from "styled-components"
import { Header } from "../../components"
import Link from "next/link"

const CreateBlog = () => {
    return (
        <>
            <Header>
                <Link href="/">
                    <a><Header.Logo src="/pictures/logo.svg" alt="my logo"/></a>
                </Link>
                <Header.Nav>
                    <Link href="/admin/currentBlogs">
                        <a><Header.NavItem>Back</Header.NavItem></a>
                    </Link>
                </Header.Nav>
            </Header>
            <h3>Create a blog</h3>
            <StyledContainer>
                <StyledTitleLabel>Title:</StyledTitleLabel>
                <StyledTitleInput></StyledTitleInput>
                <StyledDateLabel>Date:</StyledDateLabel>
                <StyledDateInput></StyledDateInput>
                <StyledCatchPhraseLabel>CatchPhrase:</StyledCatchPhraseLabel>
                <StyledCatchPhraseInput></StyledCatchPhraseInput>
                <StyledTextLabel>Text:</StyledTextLabel>
                <StyledTextInput></StyledTextInput>
                <StyledTechContainer></StyledTechContainer>
                <StyledLinkContainer></StyledLinkContainer>
                <StyledSubmitButton>Submit</StyledSubmitButton>
            </StyledContainer>
        </>
    )
}

export default CreateBlog


const StyledContainer = styled.div`
    padding: 1em;
    display: grid; 
    grid-template-columns: .3fr 1.3fr 0.3fr .5fr; 
    grid-template-rows: 0.2fr 0.2fr 0.2fr 6fr 0.2fr 0.2fr 0.2fr; 
    gap: 1em;
    grid-template-areas: 
    "Title          TitleInput          Date                DateInput"
    "CatchPhrase    CatchPhraseInput    CatchPhraseInput    CatchPhraseInput"
    "TextLabel      TextInput           TextInput           TextInput"
    ".              TextInput           TextInput           TextInput"
    ".              TechContainer       TechContainer       TechContainer"
    "Link-Container Link-Container      Link-Container      Link-Container"
    ".              .                   .                   Submit-Button"; 
`
const StyledTitleLabel = styled.p`
    grid-area: Title;
    text-align: right;
    padding-right: 1em;
`
const StyledTitleInput = styled.input`
    grid-area: TitleInput;
`
const StyledDateLabel = styled.p`
    grid-area: Date;
    text-align: right;
    padding-right: 1em;
`
const StyledDateInput = styled.input`
    grid-area: DateInput;
`
const StyledCatchPhraseLabel = styled.p`
    grid-area: CatchPhrase;
    text-align: right;
    padding-right: 1em;
`
const StyledCatchPhraseInput = styled.input`
    grid-area: CatchPhraseInput;
`
const StyledTextLabel = styled.p`
    grid-area: TextLabel;
    text-align: right;
    padding-right: 1em;
`
const StyledTextInput = styled.textarea`
    grid-area: TextInput;
`
const StyledTechContainer = styled.div`
    grid-area: TechContainer;
`
const StyledLinkContainer = styled.div`
    grid-area: Link-Container;
`
const StyledSubmitButton = styled.button`
    grid-area: Submit-Button;
`