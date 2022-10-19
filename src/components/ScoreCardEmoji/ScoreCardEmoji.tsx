 import player1  from "./assets/player-one.svg";
 import player2 from "./assets/player-two.svg";

 type PScoreCardEmoji = {
     position: "left" | "right";
 }

 const ScoreCardEmoji:React.FC<PScoreCardEmoji> = (props) => {
     const {position} = props;
     const player = position === "left" ? player1 : player2;
    return(
        <img src={player} alt="image"/>
    )
};

export default ScoreCardEmoji;