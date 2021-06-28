import styled from "styled-components"

const CreateBlog = () => {
    return (
        <>
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
    display: grid; 
  grid-template-columns: 0.7fr 1.3fr 0.7fr 1.3fr; 
  grid-template-rows: 0.3fr 0.3fr 0.3fr 6fr 0.3fr 0.3fr 0.3fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Title          TitleInput          Date                DateInput"
    "CatchPhrase    CatchPhraseInput    CatchPhraseInput    CatchPhraseInput"
    "TextLabel           TextInput           TextInput           TextInput"
    ".              TextInput           TextInput           TextInput"
    ".              TechContainer       TechContainer       TechContainer"
    "Link-Container Link-Container      Link-Container      Link-Container"
    ".              .                   .                   Submit-Button"; 
`
const StyledTitleLabel = styled.p`
    grid-area: Title;
`
const StyledTitleInput = styled.input`
    grid-area: TitleInput;
`
const StyledDateLabel = styled.p`
    grid-area: Date;
`
const StyledDateInput = styled.input`
    grid-area: DateInput;
`
const StyledCatchPhraseLabel = styled.p`
    grid-area: CatchPhrase;
`
const StyledCatchPhraseInput = styled.input`
    grid-area: CatchPhraseInput;
`
const StyledTextLabel = styled.p`
    grid-area: TextLabel;
`
const StyledTextInput = styled.input`
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






{/* <div class="container">
  <div class="Title"></div>
  <div class="TitleInput"></div>
  <div class="Date"></div>
  <div class="DateInput"></div>
  <div class="CatchPhrase"></div>
  <div class="CatchPhraseInput"></div>
  <div class="Text"></div>
  <div class="TextInput"></div>
  <div class="TechContainer"></div>
  <div class="Link-Container"></div>
  <div class="Submit-Button"></div>
</div> */}