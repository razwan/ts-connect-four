import React from "react";
import { DiscStyle, DiscWinner  } from './Disc.style';

export interface IDisc {
    player: number;
    size: 'L' | 'S';
    winner: boolean;
    className?: string;
}

const Disc: React.FC<IDisc> = ({
    player,
    size,
    winner = false,
    className = '',
}) => {
    if(winner) {
        return (
            <DiscStyle player={player} size={size} className={`${className}`}>
                <DiscWinner size={size}></DiscWinner>
            </DiscStyle>
        );
    } else {
        return (
            <DiscStyle player={player} size={size} className={`${className}`}></DiscStyle>
        );
    }
}

export default Disc;