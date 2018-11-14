import React from 'react';

import { Container, Grid, Col, Row, Header, Title, Spinner, List, ListItem, Thumbnail, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';

import PokedexList from '../../components/PokedexList/PokedexList'
import PokedexListService from "../../services/PokedexList/PokedexListService";
import PokedexActionSheet from "../../components/PokedexActionSheet/PokedexActionSheet";
import { extractTypesName, extracTypesUrl } from '../../util/PokedexUtil/PokedexUtil'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this._pokedexListService = new PokedexListService();
    this.state = {
      loading: false
    }
  }

  async componentWillMount() {
  }


  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Header
            style={{ backgroundColor: 'red' }}
          >
            <Body>
              <Title>NelioDex</Title>
            </Body>
          </Header>
          <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
            <Grid style={{ alignItems: 'center' }}>
              <Col>
                <Spinner color='red' />
              </Col>
            </Grid>
          </Content>
        </Container>
      );
    }

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
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


