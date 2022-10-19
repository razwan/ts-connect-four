 import player1  from "./assets/player-one.svg";
 import player2 from "./assets/player-two.svg";
 import {ScoreCardEmojiImageLeft, ScoreCardEmojiImageRight} from "./ScoreCardEmoji.style"

 type PScoreCardEmoji = {
     position: "left" | "right";
 }

 const ScoreCardEmoji:React.FC<PScoreCardEmoji> = (props) => {
     const {position} = props;
     const player = position === "left" ? player1 : player2;
    return position === "left" ? (
      <ScoreCardEmojiImageLeft src={player} alt="emoji" />
    ) : (
      <ScoreCardEmojiImageRight src={player} alt="emoji" />
    );
};

export default ScoreCardEmoji;