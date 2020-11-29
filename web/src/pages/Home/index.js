import { Carrinho, Header,HeaderItem, Image,ImageProfile, SearchText,Item} from './styles';
import {FaShoppingCart} from 'react-icons/fa';
const Home = () => {
    return (
        <Header>
            <HeaderItem>
                <Image src='https://www.logaster.com.br/blog/wp-content/uploads/sites/6/2019/03/0003_t_med-time-logo.png' />            
                <SearchText placeholder='Pesquise aqui seu remédio' />
                <Item>
                    <ImageProfile src='https://avatars3.githubusercontent.com/u/26467661?s=460&u=ed03c45a42d2dae435522a875545c228a58974c2&v=4' />            
                    <Carrinho>
                        <FaShoppingCart size={30} />
                    </Carrinho>
                </Item>

            </HeaderItem>
        </Header>
    )
}

export default Home;