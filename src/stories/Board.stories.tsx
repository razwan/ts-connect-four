import { useContext, useEffect } from 'react';
import { Story } from '@storybook/react';
import { Board, ConnectFour } from "../components";
import AppContext, { withContextProvider } from '../AppContext';

export default {
    title: 'Board',
    component: Board,
}

const BoardWithGame = withContextProvider(( props: any ) => {
    const context = useContext( AppContext );
    const { currentGame, setCurrentGame } = context;

    useEffect( () => {
        setCurrentGame( new ConnectFour( 'player1', 'player2' ) );
    }, [] );

    if ( ! currentGame ) {
        return null;
    }
    
    return (
        <div style={ { maxWidth: 800 } }>
            <Board { ...props } />
        </div>
    )
} )

const Template: Story = (args: any) => <BoardWithGame {...args} />; 

export const BoardStory = Template.bind({});
