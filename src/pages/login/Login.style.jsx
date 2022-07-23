import styled from 'styled-components';
import Flex from '../../components/globalstyles/flex';


const Container = styled(Flex) `
 margin-top:10rem;


 
`;
export const FormContainer = styled.form`
 background:${({theme})=> theme.colors.navbarBgColor};
 border-radius:20px;
 padding:2rem;
 width:50%;

 text-align:center;
 label{
    display:block;
    
 }
 input{
    width:100%;
    padding:1rem;
   background-color:rgba(0,0,0,0.3);
   border:none;
   border-radius:5px;
 }
 button{
    margin-top:1rem;
    padding:0.8rem;
    width:50%;
    border:none;
    background:rgba(0,0,0,0.8);
    color:white;
    border-radius:20px;
    cursor: pointer;
 }

`

export const InputContainer =styled.div`
    margin-top:2rem;
    
`

export default Container;
