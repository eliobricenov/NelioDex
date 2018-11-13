import React from 'react';

import { Container, Grid, Col, Row, Header, Title, List, ListItem, Thumbnail, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';
import PokedexList from '../../components/PokedexList/PokedexList'
import PokedexListService from "../../services/PokedexList/PokedexListService";


export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this._pokedexListService = new PokedexListService();
    this.state = {
      entries: []
    }
  }

  async componentWillMount() {
    const entries = await this._pokedexListService.getAllPokemons();
    this.setState({
      entries
    });
  }
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: 'red' }}
        >
          <Body>
            <Title>NelioDex</Title>
          </Body>
        </Header>
        <Content padder>
          <Grid>
            <Row style={{ backgroundColor: 'blue' }}>
              <Col style={{ backgroundColor: 'green' }} >
                <Button transparent style={{ alignItems: "center" }}>
                  <Icon name='menu' />
                </Button>
              </Col>
              <Col style={{ backgroundColor: 'pink' }}>
                <Button transparent style={{ alignItems: "center" }}>
                  <Icon name='menu' />
                </Button>
              </Col>
              <Col style={{ backgroundColor: 'orange' }}>
                <Button transparent style={{ alignItems: "center" }}>
                  <Icon name='menu' />
                </Button>
              </Col>
            </Row>
            <Col>
              <PokedexList entries={this.state.entries} />
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}


