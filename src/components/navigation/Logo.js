import styled from "styled-components";

const StyledLogo = styled.div`
background-color: rgb(172, 24, 24);
color: white;
display: inline-block;
padding: 0.5rem;
font-size: 1.5rem;
font-family: Trebuchet MS;
`;
export default function Logo() {
  const title = "Memes!";

 
  return <StyledLogo>{title}</StyledLogo>;
}
