import React from 'react';

import { Container, Header, Title, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: 'red' }}
        >
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>NelioDex</Title>
          </Body>
        </Header>
        <Content />
      </Container>
    );
  }
}


