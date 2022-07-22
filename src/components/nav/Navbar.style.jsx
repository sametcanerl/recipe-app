import styled from 'styled-components';
import {Link} from "react-router-dom"
import Flex from '../globalstyles/flex';

const Nav = styled(Flex)`
padding:1rem 2rem;
background: ${( {theme})=> theme.colors.navbarBgColor}
`;

export const Logo = styled(Link)`
    padding:1rem 0;
    color:${({theme})=> theme.colors.logoColor};
    text-decoration:none;
    font-weight:800;
    font-size:2rem;
    span{
        font-weight:400;
        color:${({theme})=>theme.colors.mainColor}
    }
`
export const Menu = styled(Flex)`
    @media(max-width:${({theme})=> theme.screens.lg}){
        flex-direction:column;
        width:100%
    }
`
export const MenuLink = styled(Link)`
    text-align:center;
    padding:1rem 2rem;
    text-decoration:none;
    color : ${({theme})=>theme.colors.logoColor};
    &:hover{
        color:${({theme})=> theme.colors.mainColor};
        background:${({theme})=> theme.colors.logoColor};
      
    }
`


export default Nav;
