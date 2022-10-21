import { HeaderStyle } from './HeaderStyle.style';
import { Button, Heading, Logo } from '../../components';
import { theme } from '../../styles/Theme.style';

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Button variant='plain' onClick={ () => {} }>
                    <Heading size='XS' color={theme.colors.white}>Menu</Heading>
                </Button>
            </div>
            <Logo />
            <div>
                <Button variant='plain' onClick={ () => {} }>
                    <Heading size='XS' color={theme.colors.white}>Restart</Heading>
                </Button>
            </div>
        </HeaderStyle> 
    )
}

export default Header;
