import React from 'react';

import { ListItem, CardItem, Card, Left, Right, Thumbnail, Body, Text } from 'native-base';


export default class HomeScreen extends React.Component {

    constructor() {
        super();
    }

    _goToDetailScreen() {
        this.props.navigation.navigate('Details', {
            data: {
                id: this.props.id,
                name: this.props.name,
                imageUrl: this.props.imageUrl,
                url: this.props.url
            }
        });
    }


    render() {
        return (
            <ListItem thumbnail
                onPress={() => this._goToDetailScreen()}
                key={this.props.id}
            >
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


