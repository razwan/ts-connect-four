type Column<T> = Array<T>
type Board<T> = Array<Column<T>>

class ConnectAny<T> {
    private _board: Board<T>;
    private _currentPlayer: T;
    private _winner: T | undefined;
    private _gameEnded = false;

    constructor( 
        private _player1: T, 
        private _player2: T, 
        private _connectNo: number, 
        private _columnsNo: number, 
        private _rowsNo: number 
    ) {
        this._board = Array(this._columnsNo).fill(undefined).map( () => [] );
        this._currentPlayer = this._player1;
    }

    // returns board configuration in a classic matrix
    public get board() {
        return this._board.map( column => {
            const filled = Array( this._rowsNo );
            filled.splice( 0, column.length, ...column.slice() )
            filled.fill( undefined as T, column.length, this._rowsNo + 1 );
            return filled.reverse();
        } );
    }

    private static allArrayElementsAreEqual = ( array: Array<any> ) =>  {
        return array.every(( element, index, arr ) => {
            return element !== undefined && element === arr[0];
        });
    }
    
    private hasEnoughConnected = ( array: Array<any> ) => {
        return array.some( ( element, index, arr ) => {
            const slice = arr.slice(index, index + this._connectNo);
            return slice.length === 4 && ConnectAny.allArrayElementsAreEqual( slice );
        } )
    }

    isInsertLegal( columnIndex: number ) {

        if ( columnIndex < 0 || columnIndex > this._columnsNo - 1 ) {
            return false;
        }

        if ( this._board[ columnIndex ].length > this._rowsNo - 1 ) {
            return false;
        }

        return true;
    }

    insert( columnIndex: number ) {

        if ( this._winner ) {
            throw new Error( 'Game ended' );
        }

        if ( ! this.isInsertLegal( columnIndex ) ) {
            throw new Error( 'Illegal insert' );
        }

        this._board[ columnIndex ].push( this._currentPlayer );
        
        if ( this.isWinningMove( columnIndex ) ) {
            this._winner = this._currentPlayer;
            return;
        }

        this._currentPlayer = this._currentPlayer === this._player1 ? this._player2 : this._player1;
    }

    isWinningMove( columnIndex: number ) {
        const column = this._board[ columnIndex ];
        const rowIndex = column.length - 1;
        const row = this._board.map( column => column[ rowIndex ] );
        const diag1 = this._board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex + ( eachColumnIndex - columnIndex ) ]
        } );
        const diag2 = this._board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex - ( eachColumnIndex - columnIndex ) ]
        } );

        const directions = [ column, row, diag1, diag2 ];

        return directions.some( this.hasEnoughConnected )
    }

    public get winner() {
        return this._winner;
    }

    public get player1() {
        return this._player1;
    }

    public get player2() {
        return this._player2;
    }

    public get currentPlayer() {
        return this._currentPlayer;
    }

    public get ended() {
        return this._winner || this._board.every( col => col.length === this._rowsNo );
    }
}

class ConnectFour<T> extends ConnectAny<T> {
    constructor( player1: T, player2: T ) {
        super( player1, player2, 4, 7, 6 );
    }
}

export default ConnectFour;
