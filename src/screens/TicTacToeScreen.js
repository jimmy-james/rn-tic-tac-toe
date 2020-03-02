import React, { useState, useEffect } from 'react';

import Board from '../components/TicTacToe/Board';

import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';


const TicTacToe = () => {
    const [player, setPlayer] = useState('human');
    const [humanMoves, setHumanMoves] = useState(new Array(10).fill(0));
    const [cpuMoves, setCPUMoves] = useState(new Array(10).fill(0));
    const [winner, setWinner] = useState('');

    const winningCombinations = [
        [1, 4, 7],
        [2, 5, 8],
        [1, 2, 3],
        [4, 5, 6],
        [3, 6, 9],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    useEffect(() => {
        
    }, [setHumanMoves, setCPUMoves]);

    // toggle player on click
    const togglePlayerOnPress = () => {
        if (player === 'human') {
            setPlayer('cpu');
        } else {
            setPlayer('human');
        }
    checkWinLoseOrDraw();
    };

    // resetBoard
    const resetBoard = () => {
        // 
    };

    // check winLoseOrDraw()
        // setWinner
        // if: boardIsFull, setBoardIsFull,

    const checkWinLoseOrDraw = () => {
        // 0,1,2,3,4,5,6,7,8
        console.log("HUMAN ", humanMoves);
        console.log("CPU MOVES ", cpuMoves)
        for (let i = 0; i < winningCombinations.length; i++) {
            first = winningCombinations[i][0];
            second = winningCombinations[i][1];
            third = winningCombinations[i][2];

            for (let cpu = 0; cpu < cpuMoves.length; cpu++) {

            }

            for (let human = 0; human < humanMoves.length; human++) {

            }
        }
        
    };


    const renderNotificationText = () => {
        let text = '';

        if (!winner.length) {
            switch (player) {
                case 'human':
                    text = 'Your turn';
                    break;
                case 'cpu':
                    text = 'CPU\'s turn';
                    break;
                default:
                    break;
            }
        } else {
            switch (winner) {
                case 'human':
                    text = 'You Win!!!';
                    break;
                case 'cpu':
                    text = 'You lose.';
                    break;
                case 'draw':
                    text = 'Draw! Play again.';
                    break;
                default:
                    break;
            }
        }

        return <Text style={styles.notificationText}>{text}</Text>;
    };

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <View>
                <View><Text h1 style={styles.title}>Tic Tac Toe!</Text></View>
                <Board
                    player={player}
                    togglePlayer={togglePlayerOnPress}
                    setHumanMoves={setHumanMoves}
                    setCPUMoves={setCPUMoves}
                    humanMoves={humanMoves}
                    cpuMoves={cpuMoves}
                />
                <View>{renderNotificationText()}</View>

                {winner.length ?
                    <TouchableOpacity style={styles.button} onPress={() => resetBoard()}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25 }}>Start Game</Text>
                    </TouchableOpacity> : null}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    notificationText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    },
    button: {
        backgroundColor: 'steelblue',
        color: '#fff',
        borderRadius: 3,
        paddingVertical: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 200,
    }
});

export default TicTacToe;
