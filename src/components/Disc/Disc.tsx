import React from "react";
import { DiscStyle, DiscWinner  } from './Disc.style';

export interface IDisc {
    color: '#FD6687' | '#FFCE67';
    size: 'L' | 'S';
    winner?: boolean;
    className?: string;
}

const Disc: React.FC<IDisc> = ({
    color,
    size,
    winner = false,
    className = '',
}) => {
    if(winner) {
        return (
            <DiscStyle color={ color } size={size} className={`${className}`}>
                <DiscWinner size={size}></DiscWinner>
            </DiscStyle>
        );
    } else {
        return (
            <DiscStyle color={ color } size={size} className={`${className}`}></DiscStyle>
        );
    }
}

export default Disc;