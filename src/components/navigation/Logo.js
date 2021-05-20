import styled from 'styled-components';
export default function Logo(){

    const logo= 'BRUH!';

    const Logo=styled.div`
    background-color: rgb(172, 24, 24);
    color:white;
    display:inline-block;
    padding:0.5rem;
    font-size:1.5rem;
    font-family: Trebuchet MS;
    `
    return(
        <Logo>{logo}</Logo>
    )
}