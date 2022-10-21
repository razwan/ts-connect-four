import React from "react";
import { DiscStyle, DiscWinner  } from './Disc.style';

export interface IDisc {
    color: string;
    winner?: boolean;
    className?: string; 
}

const Disc: React.FC<IDisc> = ({
    color,
    winner = false,
    className = '',
}) => {
    if(winner) {
        return (
            <DiscStyle color={ color } className={`${className}`}>
                <DiscWinner></DiscWinner>
            </DiscStyle>
        );
    } else {
        return (
            <DiscStyle color={ color } className={`${className}`}></DiscStyle>
        );
    }
}

export default Disc;