import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg'

export const Header = styled.header`
    width: auto;
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
    padding:15px 30px 15px;

    /* background:red; */
    margin-right:15px;
    margin-bottom:10px;
    svg { 
        margin : 0;

        align-items:center;
        justify-content: center; 
    }
`

export const CategoryList= styled.main`
    /* margin-top:25px; */
    margin: 25px auto;
    display: flex;
    width:100%;
    /* padding: 50px; */

    justify-content:center; //alinha na horizontal
    flex-direction:row;
`
export const CategoryListItem= styled.div`
    /* margin:15px; */
    /* padding:10px; */
    transition: opacity 0.3s;
    display:block;
    justify-content:center;
    text-align:center;

    p {
       font-weight:bold;
       font-family: roboto sans-serif;
    }
`
export const Category= styled.img`
    border-radius:50%;
    width: 150px;
    height: 150px;
    margin:0;
    transition: opacity 1s;
    
    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }

    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
    }
`;

export const ProductsList = styled.aside`
    flex:1;
    flex-wrap: wrap; 
    margin-top:25px;
    display: flex;
    justify-content:center; //alinha na horizontal
    flex-direction:row;
`;
export const ProductListItem = styled.div`
    width: 230px;
    height: 320px;
    margin-right:15px;
    background:#C4C4C4;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    transition: opacity 0.8s;

    @media (max-width: 800px) {
        margin-bottom: 10px;
        
        width: 200px;
        height: 300px;
    }

    &:hover{
        width: 240px;
        cursor: pointer;
        opacity: 0.6;

        img {
            width: 220px;
        }
        button{
            width: 220px;

        }
    }
`;
export const Product = styled.img`
    margin: 8px;
    width: 210px;
    height: 236px;
    border-radius:10px;

`;

export const PayButton = styled.button`
    background:#f5f8fa;
    margin: 8px;
    width: 210px;
    height: 42px;
    border-radius:10px;
    border:none;
    transition: opacity 0.8s;

    &:hover{
        /* width: 220px; */
        cursor: pointer;
        opacity: #f5f8f6;
    }
    
`;