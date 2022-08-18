
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --Red:'red'
    --Orange:'orange'
    --Yellow:'yellow'
    --Olive:'olive'
    --Green:'green'
    --Teal:'teal'
    --Blue:'blue'
    --Violet:'violet'
    --Purple:'purple'
    --Pink:'pink'
    --Brown:'brown'
    --Grey:'grey'
    --Black:'black'
    --shadow:0 1px 5px rgba(104,104,104,0.8)
}

`;
export const theme = {
    primary: "blue",
};

export default GlobalStyle;


