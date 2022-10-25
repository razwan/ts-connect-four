import React from 'react';
import { FooterStyle } from './FooterStyle.style';
import Timer from '../Timer';

const Footer = () => {
    return (
        <FooterStyle>
            <Timer player='PLAYER 1'/>
        </FooterStyle>
    )
}

export default Footer;
