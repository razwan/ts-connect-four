import ConnectFour from './ConnectFour';

test( 'game can be won on column', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 0, 1, 0, 1, 0];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.getWinner() ).toBe( 'razvan' );
} )

test( 'game can be won a row', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 1, 2, 2, 3, 3, 4];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.getWinner() ).toBe( 'madalina' );
} )

test( 'game can be won on a diagonal', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [0, 1, 1, 2, 3, 2, 2, 3, 4, 3, 3];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.getWinner() ).toBe( 'razvan' );
} )

test( 'game can be won on the other diagonal', () => {
    // arrange
    const game1 = new ConnectFour( 'razvan', 'madalina' );
    const moves = [4, 3, 3, 2, 1, 2, 2, 1, 0, 1, 1];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( game1.getWinner() ).toBe( 'razvan' );
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

test( 'cpu throws error if board is already full', () => {
    // arrange
    const game1 = new ConnectFour( 'bianca', 'sabina' );
    const moves = [
        ...Array(6).fill(0),
        ...Array(6).fill(1),
        ...Array(6).fill(2),
        ...Array(6).fill(3),
        ...Array(6).fill(4),
        ...Array(6).fill(5),
        ...Array(6).fill(6)
    ];

    // act
    moves.forEach( move => game1.insert( move ) );

    // assert
    expect( () => { game1.getCPUInsertIndex() } ).toThrow();
} )