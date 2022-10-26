import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
  useEffect,
} from "react";
import ConnectFour from "./components/ConnectFour";

type TAppContext = {
  showRules: boolean;
  setShowRules: Function;
  showPauseMenu: boolean;
  setShowPauseMenu: Function;
  currentGame?: ConnectFour<string>;
  setCurrentGame: Function;
  winner?: string;
  setWinner: Function;
  ended: Boolean;
  setEnded: Function;
  newGameVSPlayer: Function;
  restartGame: Function;
  quitGame: Function;
  currentPlayer: string | undefined;
  setCurrentPlayer: Function;
  resetTimer: Function;
  timer: number;
  setTimer: Function;
  playerVsPlayerScore: [number, number];
  setPlayerVsPlayerScore: Function;
  playerVsCPUScore: [number, number];
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return (props) => {
    const [showRules, setShowRules] = useState(false);
    const [showPauseMenu, setShowPauseMenu] = useState(false);
    const [winner, setWinner] = useState();
    const [ended, setEnded] = useState(false);
    const [currentGame, setCurrentGame] = useState<ConnectFour<string> | undefined>();
    const [currentPlayer, setCurrentPlayer] = useState<string | undefined>();
    const [timer, setTimer] = useState<number>(30);
    const [ playerVsPlayerScore, setPlayerVsPlayerScore ] = useState<[number, number]>([0 ,0]);

    useEffect(() => {
      setCurrentPlayer(currentGame?.currentPlayer);
      setWinner(undefined);
      setEnded(false);
    }, [currentGame]);

    const newGameVSPlayer = useCallback((player1: string, player2: string) => {
      setCurrentGame(new ConnectFour(player1, player2));
    }, []);

    const quitGame = useCallback(() => {
      setCurrentGame(undefined);
    }, []);

    const restartGame = useCallback(() => {
      setCurrentGame( new ConnectFour(currentGame!.player1, currentGame!.player2) );
    }, []);

    const resetTimer = useCallback(() => {
      setTimer(30);
    }, []);

    const context: TAppContext = {
      showRules,
      setShowRules,
      currentGame,
      setCurrentGame,
      showPauseMenu,
      setShowPauseMenu,
      newGameVSPlayer,
      winner,
      setWinner,
      ended,
      setEnded,
      restartGame,
      quitGame,
      currentPlayer,
      setCurrentPlayer,
      resetTimer,
      timer,
      setTimer,
      playerVsPlayerScore,
      setPlayerVsPlayerScore,
      playerVsCPUScore: [0, 0],
    };

    return (
      <AppContext.Provider value={context}>
        <Component />
      </AppContext.Provider>
    );
  };
};

export { withContextProvider };

export default AppContext;
