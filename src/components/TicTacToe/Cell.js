import React, { useState } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const Cell = ({ id, player, togglePlayer, winLoseOrDraw }) => {
    const [mark, setMark] = useState('');

    const handlePress = () => {
        if (!mark.length) {
            if (player === 'human') {
                setMark('X');
            } else {
                setMark('O');
            }
            togglePlayer();
        }
        // check if winner
    };

    return (
        <View id={id} style={styles.root}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
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
