 import player1  from "./assets/player-one.svg";
 import player2 from "./assets/player-two.svg";

 type PScoreCardEmoji = {
     position: "left" | "right";
 }

 const ScoreCardEmoji:React.FC<PScoreCardEmoji> = (props) => {
     const {position} = props;
     const player = position === "left" ? player1 : player2;
    return position === "left" ? (
      <img src={player} alt="emoji" />
    ) : (
      <img src={player} alt="emoji" />
    );
};

export default ScoreCardEmoji;