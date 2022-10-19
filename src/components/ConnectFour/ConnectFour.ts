type Column<T> = Array<T>
type Board<T> = Array<Column<T>>

class ConnectAny<T> {
    private board: Board<T>;
    private currentPlayer: T;
    private winner: T | undefined;

    constructor( 
        private player1: T, 
        private player2: T, 
        private connectNo: number, 
        private columnsNo: number, 
        private rowsNo: number 
    ) {
        this.board = Array(this.columnsNo).fill(undefined).map( () => [] );
        this.currentPlayer = this.player1;
    }

    private static allArrayElementsAreEqual = ( array: Array<any> ) =>  {
        return array.every(( element, index, arr ) => {
            return element !== undefined && element === arr[0];
        });
    }
    
    private hasEnoughConnected = ( array: Array<any> ) => {
        return array.some( ( element, index, arr ) => {
            const slice = arr.slice(index, index + this.connectNo);
            return slice.length === 4 && ConnectAny.allArrayElementsAreEqual( slice );
        } )
    }

    isInsertLegal( columnIndex: number ) {

        if ( columnIndex < 0 || columnIndex > this.columnsNo - 1 ) {
            return false;
        }

        if ( this.board[ columnIndex ].length > this.rowsNo - 1 ) {
            return false;
        }

        return true;
    }

    insert( columnIndex: number ) {

        if ( this.winner ) {
            throw new Error( 'Game ended' );
        }

        if ( ! this.isInsertLegal( columnIndex ) ) {
            throw new Error( 'Illegal insert' );
        }

        this.board[ columnIndex ].push( this.currentPlayer );
        
        if ( this.isWinningMove( columnIndex ) ) {
            this.winner = this.currentPlayer;
            return;
        }

        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    isWinningMove( columnIndex: number ) {
        const column = this.board[ columnIndex ];
        const rowIndex = column.length - 1;
        const row = this.board.map( column => column[ rowIndex ] );
        const diag1 = this.board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex + ( eachColumnIndex - columnIndex ) ]
        } );
        const diag2 = this.board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex - ( eachColumnIndex - columnIndex ) ]
        } );

        const directions = [ column, row, diag1, diag2 ];

        return directions.some( this.hasEnoughConnected )
    }

    getWinner() {
        return this.winner;
    }
}

class ConnectFour<T> extends ConnectAny<T> {
    constructor( player1: T, player2: T ) {
        super( player1, player2, 4, 7, 6 );
    }
}

export default ConnectFour;
