import { HeaderStyle } from './HeaderStyle.style';
import { Button, Heading } from '../../components';
import { theme } from '../../styles/Theme.style';

const Header = () => {
    return (
        <HeaderStyle>
            <Button variant='plain' onClick={ () => {} }>
                <Heading size='XS' color={theme.colors.white}>Menu</Heading>
            </Button>
        </HeaderStyle>
    )
}

export default Header;
