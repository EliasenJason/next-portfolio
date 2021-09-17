import styled from 'styled-components'

export const Container = styled.div`
    width: 25%;
    /* height: 25vh; */
    font-size: 1.4vh;
    background: #3c00FF;
    font-family: sans-serif;
    border-radius: 5px;
    margin-left: 1em;
    transform: skew(-3deg);
    box-shadow: 13px 3px 5px 1px #3c00FF;
    padding-left: 2em;
    padding-bottom: .2em;
    margin-bottom: 2.5em;
    @media (max-width:700px) {
        width: 85%;
        background-color: #3c00FF;
    }
    @media (max-width: 1100px) {
        width: 60%;
        background-color: #3c00FF;
    }
`
export const DescriptionContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr .6fr; 
    grid-template-rows: 0.3fr 0.3fr 1fr 0.2fr;  
    grid-template-areas: 
        "title          title       date"
        "catch          catch       catch"
        "twitterText    twitterText twitterText"
        ".              .           readMore"; 
    /* overflow: hidden; */
    background: white;
    position: relative;
    right: -10px;
    padding: .5em 0 0 1em;
`
export const Title = styled.h3`
    grid-area: title;
    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
`
export const Date = styled.p`
    grid-area: date;
`
export const CatchPhrase = styled.h4`
    grid-area: catch;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #3c00FF;
`
export const TwitterText = styled.p`
    grid-area: twitterText;
    height: 5.5em;
    padding: 0 1em;

`
export const ReadMoreButton = styled.a`
    grid-area: readMore;
    text-align: center;
    margin: .2em auto;
    border-radius: 1em;
    padding: 1em .5em;
    :hover {
        background-color: #3c00FF;
        color: white;
        cursor: pointer;
    }
`