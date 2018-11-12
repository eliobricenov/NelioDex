import React from 'react';

import { ListItem, Left, Right, Thumbnail, Body, Text } from 'native-base';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <ListItem thumbnail>
                <Body>
                    <Text>{this.props.name}</Text>
                </Body>
                <Right>
                    <Thumbnail source={{ uri: this.props.imageUrl }} />
                </Right>
            </ListItem>
        );
    }
}


