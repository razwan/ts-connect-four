type Column<T> = Array<T>
type Board<T> = Array<Column<T>>

class ConnectAny<T> {
    private _board: Board<T>;
    private _currentPlayer: T;
    private _winner: T | undefined;
    private _connected: Array<[number, number]> | undefined;

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
        let startIndex = -1;
        
        for (let index = 0; index < array.length; index++) {
            const slice = array.slice(index, index + this._connectNo);
            const areConnected = slice.length === 4 && ConnectAny.allArrayElementsAreEqual( slice );

            if ( areConnected ) {
                startIndex = index;
                break;
            }
            
        }
        
        return startIndex;
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

        const connected = this.isWinningMove( columnIndex );
        
        if ( connected ) {
            this._winner = this._currentPlayer;
            this._connected = connected;
            return;
        }

        this._currentPlayer = this._currentPlayer === this._player1 ? this._player2 : this._player1;
    }

    isWinningMove: ( columnIndex: number ) => Array<[number,number]> | null = ( columnIndex: number ) => {
        const column = this._board[ columnIndex ];
        const rowIndex = column.length - 1;
        const row = this._board.map( column => column[ rowIndex ] );
        const diag1 = this._board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex + ( eachColumnIndex - columnIndex ) ]
        } );
        const diag2 = this._board.map( ( eachColumn, eachColumnIndex ) => {
            return eachColumn[ rowIndex - ( eachColumnIndex - columnIndex ) ]
        } );

        const rowIndexStart = this.hasEnoughConnected( row );

        if ( rowIndexStart > -1 ) {
            return [
                [rowIndexStart + 0, rowIndex],
                [rowIndexStart + 1, rowIndex],
                [rowIndexStart + 2, rowIndex],
                [rowIndexStart + 3, rowIndex],
            ];
        }

        const colIndexStart = this.hasEnoughConnected( column );

        if ( colIndexStart > -1 ) {
            return [
                [columnIndex, colIndexStart + 0],
                [columnIndex, colIndexStart + 1],
                [columnIndex, colIndexStart + 2],
                [columnIndex, colIndexStart + 3],
            ];
        }

        const diag1Start = this.hasEnoughConnected( diag1 );

        if ( diag1Start > -1 ) {
            return [
                [diag1Start + 0, rowIndex - columnIndex + diag1Start + 0],
                [diag1Start + 1, rowIndex - columnIndex + diag1Start + 1],
                [diag1Start + 2, rowIndex - columnIndex + diag1Start + 2],
                [diag1Start + 3, rowIndex - columnIndex + diag1Start + 3],
            ];
        }

        const diag2Start = this.hasEnoughConnected( diag2 );

        if ( diag2Start > -1 ) {
            return [
                [diag2Start + 0, rowIndex - columnIndex + diag2Start - 0],
                [diag2Start + 1, rowIndex - columnIndex + diag2Start - 1],
                [diag2Start + 2, rowIndex - columnIndex + diag2Start - 2],
                [diag2Start + 3, rowIndex - columnIndex + diag2Start - 3],
            ];
        }

        return null;
    }

    public getCPUInsertIndex(): number {
        const validIndexes: number[] = [];
        this.board.forEach( (column, index) => {
            if (column.length < this._rowsNo) {
                validIndexes.push(index);
            }
        });

        if(validIndexes.length === 0) {
            throw new Error( 'Board is already full' );
        }

        return validIndexes[Math.floor(Math.random() * validIndexes.length)];
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

    public get connected() {
        return this._connected;
    }
}

class ConnectFour<T> extends ConnectAny<T> {
    constructor( player1: T, player2: T ) {
        super( player1, player2, 4, 7, 6 );
    }
}

export default ConnectFour;
