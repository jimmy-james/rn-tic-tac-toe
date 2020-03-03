import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const Cell = ({ id, player, togglePlayer, cpuMoves, setCPUMoves, humanMoves, setHumanMoves, winner, newGame }) => {
    const [mark, setMark] = useState('');

    useEffect(() => {
        if (newGame) {
            setMark('');
        }
    }, [newGame]);

    const handlePress = (e) => {
        if (!mark.length) {
            if (player === 'human') {
                setMark('X');
                let moves = humanMoves;
                moves[e] = e;
                setHumanMoves(moves);
            } else {
                setMark('O');
                let moves = cpuMoves;
                moves[e] = e;
                setCPUMoves(moves);
            }

            togglePlayer();
        }
    };

    return (
        <View id={id} style={styles.root}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress(id)} disabled={winner.length > 0}>
                <Text style={styles.text}>{mark}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'skyblue',
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        margin: 5,
    },
    button: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
    },
    text: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        textAlign: 'center',
        fontSize: 90,
        color: '#fff'
    }
});

export default Cell;
