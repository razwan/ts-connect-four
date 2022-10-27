import ConnectFour from './ConnectFour';

test( 'game can be won on column', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 0, 1, 0, 1, 0];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.winner ).toBe( 'razvan' );
} )

test( 'game can be won a row', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 1, 2, 2, 3, 3, 4];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.winner ).toBe( 'madalina' );
} )

test( 'game can be won on a diagonal', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 1, 2, 3, 2, 2, 3, 4, 3, 3];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.winner ).toBe( 'razvan' );
} )

test( 'game can be won on the other diagonal', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [4, 3, 3, 2, 1, 2, 2, 1, 0, 1, 1];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.winner ).toBe( 'razvan' );
} )

test( 'cannot continue after game ended', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [4, 3, 3, 2, 1, 2, 2, 1, 0, 1, 1];

    // act
    moves.forEach( move => game1.insert( move ) );
    // game has a winner
    
    // assert
    expect( () => { game1.insert(1) } ).toThrow( 'Game ended' );
} )

test( 'cannot insert outside bounds', () => {
    // arrange 
    const game1 = new ConnectFour( 'razvan', 'madalina' );

    // assert
    expect( () => { game1.insert(7) } ).toThrow( 'Illegal insert' );
    expect( () => { game1.insert(-1) } ).toThrow( 'Illegal insert' );
} )

test( 'cannot insert in a full column', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [1, 1, 1, 1, 1, 1];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( () => { game1.insert( 1 ) } ).toThrow();
} )

test( 'board is empty at beginning of the game', () => {
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const emptyColumn = Array(6).fill(undefined).map( () => undefined );
    const emptyBoard = Array(7).fill(undefined).map( () => emptyColumn );
    expect( game1.board ).toEqual( emptyBoard );
} )

test( 'cpu throws error if board is already full', () => {
    // arrange
    const game1 = new ConnectFour( 'bianca', 'sabina' );
    const moves = [
        0,0,0,0,0,0,
        1,1,1,1,1,1,
        2,2,2,2,2,2,
        4,4,4,4,4,4,
        5,5,5,5,5,5,
        6,6,6,6,6,3,
        3,3,3,3,3,6,
    ];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( () => { game1.getCPUInsertIndex() } ).toThrow();
} )

test( 'board returns array for 1 disc inserted', () => {
    // arrange
    const game1 = new ConnectFour( 'player1', 'player2' );
    const moves = [
        0
    ];
    const returnedArray = [
        [undefined,undefined,undefined,undefined, undefined, 'player1'],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined]
    ]

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.board ).toEqual( returnedArray );
} )

test( 'board returns if player 1 wins ', () => {
    // arrange
    const game1 = new ConnectFour( 'player1', 'player2' );
    const moves = [
        0,3,0,4,0,4,
        0
    ];
    const returnedArray = [
        [undefined,undefined,'player1','player1', 'player1', 'player1'],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, 'player2'],
        [undefined,undefined,undefined,undefined, 'player2', 'player2'],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined]
    ]

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.board ).toEqual( returnedArray );
} )

test( 'board returns if player 2 wins ', () => {
    // arrange
    const game1 = new ConnectFour( 'player1', 'player2' );
    const moves = [
        0,3,1,4,0,5,
        1,6
    ];
    const returnedArray = [
        [undefined,undefined,undefined,undefined, 'player1', 'player1'],
        [undefined,undefined,undefined,undefined, 'player1', 'player1'],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, 'player2'],
        [undefined,undefined,undefined,undefined, undefined, 'player2'],
        [undefined,undefined,undefined,undefined, undefined, 'player2'],
        [undefined,undefined,undefined,undefined, undefined, 'player2']
    ]

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.board ).toEqual( returnedArray );
} )

test( 'board returns if game is draw ', () => {
    // arrange
    const game1 = new ConnectFour( 'player1', 'player2' );
    const moves = [
        0,0,0,0,0,0,
        1,1,1,1,1,1,
        2,2,2,2,2,2,
        5,5,5,5,5,5,
        6,6,6,6,6,6,
        4,3,3,4,4,3,
        3,4,4,3,3,4

    ];
    const returnedArray = [
        ['player2','player1','player2','player1', 'player2', 'player1'],
        ['player2','player1','player2','player1', 'player2', 'player1'],
        ['player2','player1','player2','player1', 'player2', 'player1'],
        ['player1','player2','player1','player2', 'player1', 'player2'],
        ['player2','player1','player2','player1', 'player2', 'player1'],
        ['player2','player1','player2','player1', 'player2', 'player1'],
        ['player2','player1','player2','player1', 'player2', 'player1']
    ]

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.board ).toEqual( returnedArray );
} )

test( 'board returns if board is empty ', () => {
    // arrange
    const game1 = new ConnectFour( 'player1', 'player2' );
    const returnedArray = [
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined],
        [undefined,undefined,undefined,undefined, undefined, undefined]
    ]

    // assert
    expect( game1.board ).toEqual( returnedArray );
} )


