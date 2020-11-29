import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg'

export const Header = styled.header`
    width: 100%;
    height: 60px;
    
    background:#fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.25);
`;

export const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 100%;
`;

export const Image = styled.img`
   margin:10px 20px ;
   height: 40px;
   /* width:auto; */
   /* border-radius:50%; */
`;

export const Item = styled.div`
    a {
        align-items:center;
        justify-content: center; 
    }
`;
export const SearchText = styled.input`
    width:220px;
    background:#f5f8fa;
    border:1px solid #E6ECF0;
    height: 34px;
    padding:0 30px 0 12px; 
    border-radius:16px;

    color: #667581;
    background: #f5f8fa url(${SearchIcon}) no-repeat 230px center;
`;

export const ImageProfile = styled.img`
    margin:10px 20px ;
   height: 40px;
   /* width:auto; */
   border-radius:50%;
`;

export const Carrinho = styled.a`
    padding:15px;

    background:red;
    margin-right:15px;

    svg { 

        align-items:center;
        justify-content: center; 
    }
`