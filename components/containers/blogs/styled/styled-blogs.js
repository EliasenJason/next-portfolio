import styled from 'styled-components'

export const Container = styled.div`
    width: 600px;
    height: 415px;
    margin-bottom: 1.6%;
    background: #3c00FF;
    font-family: sans-serif;
    border-radius: 5px;
    margin-left: 1em;
    transform: skew(-3deg);
    box-shadow: 10px 0px 5px 1px #3c00FF;
    padding-left: 2em;
`
export const DescriptionContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr .6fr; 
    grid-template-rows: 0.3fr 0.3fr 3.0fr 0.2fr;  
    grid-template-areas: 
        "title          title       date"
        "catch          catch       catch"
        "twitterText    twitterText twitterText"
        ".              .           readMore"; 
    overflow: hidden;
    background: white;
    position: relative;
    right: -10px;
    padding: 1em 0 0 1em;
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

`
export const ReadMoreButton = styled.a`
    grid-area: readMore;
`