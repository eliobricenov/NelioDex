import React from "react";
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
import PokedexListService from "../../services/PokedexList/PokedexListService";

export default class ActionSheetExample extends React.Component {
    constructor(props) {
        super(props);
        this._pokedexListService = new PokedexListService();
        this.state = {
            types: []
        };
    }

    render() {
        return (
            <Button
                small
                block
                onPress={() =>
                    ActionSheet.show(
                        {
                            options: this.props.options,
                            title: this.props.title
                        },
                        buttonIndex => {
                            this.props.onActionSelected(buttonIndex)
                        }
                    )}
            >
                <Text>{this.props.title}</Text>
            </Button>
        );

    }
}