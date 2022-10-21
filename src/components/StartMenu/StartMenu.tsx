import { Logo } from "..";
import { theme } from "../../styles/Theme.style";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { StartMenuWrapper } from "./StartMenu.style";
import playersImage from "./assets/player-vs-player.svg";

export interface IStartMenu {
  className?: string;
  onStart?: () => void;
  onRulesClick?: () => void;
}

const StartMenu: React.FC<IStartMenu> = ( props ) => {
  const { className } = props;
  const onRulesClick = props.onRulesClick ?? (() => {})
  const onStart = props.onStart ?? (() => {})
  
  return (
    <StartMenuWrapper className={`${className}`}>
      <div><Logo /></div>
      <Button onClick={() => { onStart() } } backgroundColor={theme.colors.yellow}>
        <div className='start-button-content'>
          <Heading size='M'>Play vs player</Heading>
          <img src={playersImage} alt='player vs player' />
        </div>
      </Button>
      <Button onClick={() => { onRulesClick() }}>
        <Heading size='M'>Game rules</Heading>
      </Button>
    </StartMenuWrapper>
  );
};

export default StartMenu;