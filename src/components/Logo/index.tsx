import logo from './assets/logo.svg';
import styled from 'styled-components';

const LogoStyle = styled.img`
    @media not screen and (min-width: 1140px) {
        max-width: 46px;
    }
`

const Logo: React.FC = () => {
    return (
        <LogoStyle src={ logo } />
    )
}

export default Logo;
