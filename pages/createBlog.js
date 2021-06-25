import styled from "styled-components"



const CreateBlog = () => {
    return (
        <>
        <HeaderText>Enter a blog</HeaderText>
        <FormContainer>
            <Title>Title</Title><TitleInput></TitleInput><Date>Date</Date><DateInput></DateInput>
            <CatchPhrase>CatchPhrase</CatchPhrase><CatchPhraseInput></CatchPhraseInput>
            <Text>Text</Text><TextInput></TextInput>
            <TechContainer></TechContainer>
            <LinkContainer></LinkContainer>
            <SubmitButton>Submit</SubmitButton>
        </FormContainer>
        </>
    )
}

export default CreateBlog

const HeaderText = styled.h2`
`
const FormContainer = styled.form`
    display: grid; 
    grid-template-columns: 0.3fr 1.3fr 0.3fr 1.3fr; 
    grid-template-rows: 0.3fr 0.3fr 0.3fr 10fr 0.3fr 0.3fr 0.3fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "Title          TitleInput          DateLabel           DateInput"
        "CatchPhrase    CatchPhraseInput    CatchPhraseInput    CatchPhraseInput"
        "Text           TextInput           TextInput           TextInput"
        ".              TextInput           TextInput           TextInput"
        ".              TechContainer       TechContainer       TechContainer"
        "Link-Container Link-Container      Link-Container      LinkContainer"
        ".              .                   .                   SubmitButton";
    grid-gap: 1em;
    margin-right: 1em; 
`

const Title = styled.label`
    grid-area: Title;
    margin-left: auto;
    padding-right: 1em;
`
const TitleInput = styled.input`
    grid-area: TitleInput;
`
const Date = styled.label`
    grid-area: DateLabel;
    margin-left: auto;
    padding-right: 1em;
`
const DateInput = styled.input`
    grid-area: DateInput;
`
const CatchPhrase = styled.label`
    grid-area: CatchPhrase;
    margin-left: auto;
    padding-right: 1em;
`
const CatchPhraseInput = styled.input`
    grid-area: CatchPhraseInput;
`
const Text = styled.text`
    grid-area: Text;
    margin-left: auto;
    padding-right: 1em;
`
const TextInput = styled.input`
    grid-area: TextInput;
`
const TechContainer = styled.div`
    grid-area: TechContainer;
`
const LinkContainer = styled.div`
    grid-area: LinkContainer;
`
const SubmitButton = styled.button`
    grid-area: SubmitButton;
`
