import React, { useState } from 'react';

import Board from '../components/TicTacToe/Board';

import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';


const TicTacToe = () => {
    const [player, setPlayer] = useState('human');
    const [winner, setWinner] = useState('');
    const [boardIsEmpty, setBoardIsEmpty] = useState(true);

    // check board status for winner

    // toggle player on click
    const togglePlayerOnPress = () => {
        if (player === 'human') {
            setPlayer('cpu');
        } else {
            setPlayer('human');
        }
    };

    // resetBoard
    const resetBoard = () => {
        // 
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
                    text = 'Your Won!!!';
                    break;
                case 'cpu':
                    text = 'You lose.';
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
                />
                <View>{renderNotificationText()}</View>

                {winner.length || boardIsEmpty &&
                    <TouchableOpacity style={styles.button} onPress={() => resetBoard()}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25 }}>Start Game</Text>
                    </TouchableOpacity>}
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
