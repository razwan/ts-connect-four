import { HeaderStyle } from './HeaderStyle.style';
import { Button, Heading, Logo } from '../../components';
import { theme } from '../../styles/Theme.style';

type HeaderProps = {
    onMenuClick?: Function,
    onRestartClick?: Function,
}

const Header: React.FC<HeaderProps> = ( props ) => {
    const onMenuClick = props.onMenuClick ?? (() => {});
    const onRestartClick = props.onRestartClick ?? (() => {});

    return (
        <HeaderStyle>
            <div>
                <Button variant='plain' onClick={ () => { onMenuClick() } }>
                    <Heading size='XS' color={theme.colors.white}>Menu</Heading>
                </Button>
            </div>
            <Logo />
            <div>
                <Button variant='plain' onClick={ () => { onRestartClick() } }>
                    <Heading size='XS' color={theme.colors.white}>Restart</Heading>
                </Button>
            </div>
        </HeaderStyle> 
    )
}

export default Header;
