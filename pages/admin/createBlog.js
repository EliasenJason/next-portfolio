import styled from "styled-components"
import { Header } from "../../components"
import Link from "next/link"
import { useState, useEffect } from 'react'
import router, { useRouter } from 'next/router'
import Loader from "react-loader-spinner"

const CreateBlog = () => {
    const [form, setForm] = useState({
        title: '',
        blogCatchPhrase: '',
        text: '',
        tweet: '',
        link: '',
        twitterLink: '',
        date: ''
        
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({
        title: '',
        blogCatchPhrase: '',
        text: '',
        tweet: '',
        link: '',
        twitterLink: '',
        date: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(validate())
        setErrors(validate())
        setIsSubmitting(true)
    };

    const validate = () => {
        let err = {}
        if (!form.title) {
            err.title = 'Title is required'
        }
        if (!form.date) {
            err.date = "Date is required"
        }
        if (!form.blogCatchPhrase) {
            err.catch = "CatchPhrase is required"
        }
        if (!form.text) {
            err.text = "Text is required"
        }
        return err
    }

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                setIsSubmitting(true)
                createBlog()
                alert('success')
                setIsSubmitting(false)
            } else {
                setIsSubmitting(false)
                alert('failed')
            }
        }
    }, [errors])

    const createBlog = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/blogs', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/admin/currentBlogs")
        } catch (error) {
            console.error(error)
        }
    }

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
            <MainContainer>
            <h3>Create a blog</h3>
                {isSubmitting ?
                    <SpinnerContainer>
                        <Loader 
                            type="Grid"
                            color="#3c00FF"
                        />
                    </SpinnerContainer>
                :
                    <StyledContainer onSubmit={handleSubmit}>
                        <StyledTitleLabel>Title:</StyledTitleLabel>
                        <StyledTitleInput
                            errors={errors}
                            name={"title"}
                            value={form.title} 
                            onChange={handleChange}
                        />
                        <StyledDateLabel>Date:</StyledDateLabel>
                        <StyledDateInput
                            type={"date"}
                            errors={errors}
                            name={"date"}
                            value={form.date} 
                            onChange={handleChange}
                        />
                        <StyledCatchPhraseLabel>CatchPhrase:</StyledCatchPhraseLabel>
                        <StyledCatchPhraseInput
                            errors={errors}
                            name={"blogCatchPhrase"}
                            value={form.blogCatchPhrase} 
                            onChange={handleChange}
                        />
                        <StyledTextLabel>Text:</StyledTextLabel>
                        <StyledTextInput
                            errors={errors}
                            name={"text"}
                            value={form.text} 
                            onChange={handleChange}
                        />
                        <StyledTweetLabel>Tweet:</StyledTweetLabel>
                        <StyledTweetInput
                            errors={errors}
                            name={"tweet"}
                            value={form.tweet}
                            onChange={handleChange}
                        ></StyledTweetInput>
                        <StyledLinkContainer></StyledLinkContainer>
                        <StyledSubmitButton
                            type="submit"
                        >Submit</StyledSubmitButton>
                    </StyledContainer>
                }
            </MainContainer>
        </>
    )
}

export default CreateBlog

const MainContainer = styled.div`
    height: 87vh;
    padding: 0;
    margin: 0;
`

const SpinnerContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledContainer = styled.form`
    padding: 1em;
    display: grid; 
    grid-template-columns: .3fr 1.3fr 0.3fr .5fr; 
    grid-template-rows: 0.2fr 0.2fr 0.2fr 5fr 3fr 0.2fr 0.2fr; 
    gap: .5em;
    grid-template-areas: 
    "Title          TitleInput          Date                DateInput"
    "CatchPhrase    CatchPhraseInput    CatchPhraseInput    CatchPhraseInput"
    "TextLabel      TextInput           TextInput           TextInput"
    ".              TextInput           TextInput           TextInput"
    "TweetLabel     TweetContainer      TweetContainer      TweetContainer"
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
    border: ${(props) => {
        if (props.errors[props.name] !== "") {
            if(props.value.length === 0) {
                return 'solid red 1px'
            }
            
        } else {
            return null
        }
    }};
    
`
const StyledDateLabel = styled.p`
    grid-area: Date;
    text-align: right;
    padding-right: 1em;
`
const StyledDateInput = styled.input`
    grid-area: DateInput;
    border: ${(props) => {
        if (props.errors[props.name] !== "") {
            if(props.value.length === 0) {
                return 'solid red 1px'
            }
            
        } else {
            return null
        }
    }};
`
const StyledCatchPhraseLabel = styled.p`
    grid-area: CatchPhrase;
    text-align: right;
    padding-right: 1em;
`
const StyledCatchPhraseInput = styled.input`
    grid-area: CatchPhraseInput;
    border: ${(props) => {
        if (props.errors[props.name] !== "") {
            if(props.value.length === 0) {
                return 'solid red 1px'
            }
            
        } else {
            return null
        }
    }};
`
const StyledTextLabel = styled.p`
    grid-area: TextLabel;
    text-align: right;
    padding-right: 1em;
`
const StyledTextInput = styled.textarea`
    grid-area: TextInput;
    border: ${(props) => {
        if (props.errors[props.name] !== "") {
            if(props.value.length === 0) {
                return 'solid red 1px'
            }
            
        } else {
            return null
        }
    }};
`
const StyledTweetLabel = styled.p`
    grid-area: TweetLabel;
    text-align: right;
    padding-right: 1em;
`
const StyledTweetInput = styled.input`
    grid-area: TweetContainer;
`
const StyledLinkContainer = styled.div`
    grid-area: Link-Container;
`
const StyledSubmitButton = styled.button`
    grid-area: Submit-Button;
    margin: 0em 10em;
    padding: 1em;
`