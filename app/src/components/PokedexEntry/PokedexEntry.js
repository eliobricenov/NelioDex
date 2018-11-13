import React from 'react';

import { ListItem, CardItem, Card, Left, Right, Thumbnail, Body, Text } from 'native-base';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail source={{ uri: this.props.imageUrl }} />
                </Left>
                <Body>
                    <Text>{this.props.name}</Text>
                </Body>
            </ListItem>
        );
    }
}


