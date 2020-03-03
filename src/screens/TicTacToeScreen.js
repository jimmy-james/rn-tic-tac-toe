import React, { useState, useEffect } from 'react';
import Board from '../components/TicTacToe/Board';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const TicTacToe = () => {
    const [player, setPlayer] = useState('human');
    const [humanMoves, setHumanMoves] = useState(new Array(10).fill(0));
    const [cpuMoves, setCPUMoves] = useState(new Array(10).fill(0));
    const [winner, setWinner] = useState('');
    const [newGame, setNewGame] = useState(false);

    useEffect(() => {
        setPlayer('human');
        setNewGame(false);
    }, [newGame]);

    const winningCombinations = [
        [1, 4, 7],
        [2, 5, 8],
        [1, 2, 3],
        [4, 5, 6],
        [3, 6, 9],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

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
        setWinner('');
        setHumanMoves(new Array(10).fill(0));
        setCPUMoves(new Array(10).fill(0));
        setNewGame(true);
    };

    const checkWinLoseOrDraw = () => {
        let cpuMarks;
        let humanMarks;
        // lock press handlers on win, lose, or draw
        for (let i = 0; i < winningCombinations.length; i++) {
            const first = winningCombinations[i][0];
            const second = winningCombinations[i][1];
            const third = winningCombinations[i][2];
            cpuMarks = 0;
            humanMarks = 0;

            for (let cpu = 0; cpu < cpuMoves.length; cpu++) {
                if (cpuMoves[first] === first && cpuMoves[second] === second && cpuMoves[third] === third) {
                    setWinner('cpu');
                    return;
                }
                if (cpuMoves[cpu] !== 0) {
                    cpuMarks++;
                }
            }

            for (let human = 0; human < humanMoves.length; human++) {
                if (humanMoves[first] === first && humanMoves[second] === second && humanMoves[third] === third) {
                    setWinner('human');
                    return;
                }
                if (humanMoves[human] !== 0) {
                    humanMarks++;
                }
            }
        }
console.log(cpuMarks, humanMarks)
        if (cpuMarks + humanMarks === 9) {
            setWinner('draw');
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
                    winner={winner}
                    newGame={newGame}
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
