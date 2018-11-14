import React from 'react';

import { List, ListItem, CardItem, Card, Left, Right, Thumbnail, Body, Text } from 'native-base';

import PokedexEntry from '../PokedexEntry/PokedexEntry';

export default class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false,
            entries: []
        };

    }


    componentWillMount() {
        this.setState({
            entries: this.prepareEntries(),
            isReady: true
        });
    }

    render() {

        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
            <List>
                {this.prepareEntries()}
            </List>
        );
    }

    prepareEntries() {
        let entries = this.props.entries || [];
        return entries.map(entry => {
            return <PokedexEntry name={entry.name} imageUrl={entry.imageUrl} url={entry.url} />
        })
    }
}


