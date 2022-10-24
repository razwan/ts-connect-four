import { theme } from "../../styles/Theme.style";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { PauseMenuWrapper } from "./PauseMenu.style";

export interface IPauseMenu {
  className?: string;
  onContinue?: () => void;
  onRestart?: () => void;
  onQuit?: () => void;
}

const PauseMenu: React.FC<IPauseMenu> = ( props ) => {
  const { className } = props;
  const onContinue = props.onContinue ?? (() => {});
  const onRestart = props.onRestart ?? (() => {});
  const onQuit = props.onQuit ?? (() => {});
  
  return (
    <PauseMenuWrapper className={`${className}`}>
      <Heading size='L' color={theme.colors.white}>Pause</Heading>
      <Button onClick={() => { onContinue() }}>
        <Heading size='M'>Continue game</Heading>
      </Button>
      <Button onClick={() => { onRestart() }}>
        <Heading size='M'>Restart</Heading>
      </Button>
      <Button onClick={() => { onQuit() }} backgroundColor={theme.colors.pink}>
        <Heading size='M' color={theme.colors.white}>Quit Game</Heading>
      </Button>
    </PauseMenuWrapper>
  );
};

export default PauseMenu;