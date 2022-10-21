import { Header, Game, Footer, ScoreCard, Disc, StartMenu, OverlayRules } from '../../components';

const GameScreen: React.FC<React.PropsWithChildren> = () => {
    return (
        <div className='layout'>
        <div className='layout__header'>
          <Header />
        </div>
        <div className='layout__scorecard layout__scorecard-1'>
          <ScoreCard position={ 'left' } player={ 'player 1' } score={ 10 } />
        </div>
        <div className='layout__game'>
          <Game>
            <Disc color={ '#FFCE67' } size={ 'L' } />
          </Game>
        </div>
        <div className='layout__scorecard layout__scorecard-2'>
          <ScoreCard position={ 'right' } player={ 'player 2' } score={ 1 } />
        </div>
        <div className='layout__footer'>
          <Footer />
        </div>
      </div>
    )
}

export default GameScreen;