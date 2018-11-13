import React from 'react';

import { Container, Grid, Col, Row, Header, Title, List, ListItem, Thumbnail, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';
import PokedexList from '../../components/PokedexList/PokedexList'

const entries = [
  { name: 'Pikachu', imageUrl: 'http://pokeapi.co/media/sprites/pokemon/25.png' },
  { name: 'Pikachu', imageUrl: 'http://pokeapi.co/media/sprites/pokemon/25.png' }
]

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
        <Content padder>
          <PokedexList entries={entries} />
        </Content>
      </Container>
    );
  }
}


