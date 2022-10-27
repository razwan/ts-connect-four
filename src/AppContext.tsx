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
  player1: string;
  player2: string;
  endGame: Function,
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return (props) => {
    const [showRules, setShowRules] = useState(false);
    const [showPauseMenu, setShowPauseMenu] = useState(false);
    const [winner, setWinner] = useState<string>();
    const [ended, setEnded] = useState(false);
    const [currentGame, setCurrentGame] = useState<ConnectFour<string> | undefined>();
    const [currentPlayer, setCurrentPlayer] = useState<string | undefined>();
    const [timer, setTimer] = useState<number>(30);
    const [ player1, setPlayer1 ] = useState( 'razvan' );
    const [ player2, setPlayer2 ] = useState( 'madalina' );
    
    const score = localStorage.getItem( 'pvpScore' );
    const initialScore = score ? JSON.parse( score ) : [0, 0];

    const [ playerVsPlayerScore, setPlayerVsPlayerScore ] = useState<[number, number]>(initialScore);

    useEffect( () => {
      localStorage.setItem( 'pvpScore', JSON.stringify( playerVsPlayerScore ) );
    }, [ playerVsPlayerScore ] );

    useEffect( () => {
      localStorage.setItem( 'currentGame', JSON.stringify( currentGame ) );
    }, [ currentGame ] );

    const newGameVSPlayer = useCallback(( p1: string, p2: string) => {
      setCurrentGame(new ConnectFour(p1, p2));
      setCurrentPlayer( p1 );
      setWinner( undefined );
      setEnded( false );
      resetTimer();
    }, []);

    const quitGame = useCallback(() => {
      setCurrentGame(undefined);
    }, []);

    const restartGame = useCallback(() => {
      setCurrentGame( new ConnectFour(currentGame!.player1, currentGame!.player2) );
      setWinner( undefined );
      setEnded( false );
      resetTimer();
    }, []);

    const resetTimer = useCallback(() => {
      setTimer(30);
    }, []);

    const endGame = useCallback(( winner: string ) => {
      setEnded( true );

      if ( winner ) {
        setWinner( winner );

        if( player1 === winner ) {
          setPlayerVsPlayerScore( [ playerVsPlayerScore[0] + 1, playerVsPlayerScore[1] ] );
        }

        if( player2 === winner ) {
            setPlayerVsPlayerScore( [ playerVsPlayerScore[0], playerVsPlayerScore[1] + 1 ] );
        }
      }
    }, [ playerVsPlayerScore ] );

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
      player1,
      player2,
      endGame,
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
