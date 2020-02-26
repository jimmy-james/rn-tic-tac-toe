import React, { useState } from 'react';
import Cell from './Cell';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';

const Board = props => {

    const buildBoard = () => {
        const board = [];

        for (let i = 1; i <= 9; i++) {
            board.push(<Cell key={`cell-${i}`} {...props} />);
        }

        return board;
    };

    return (
        <View style={styles.root}>
            {buildBoard()}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    }
});

export default Board;
