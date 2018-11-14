import React from 'react';

import { Container, Card, CardItem, Grid, Col, Row, Header, Title, Spinner, List, ListItem, Thumbnail, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';

import PokedexListService from "../../services/PokedexList/PokedexListService";
import { extractTypesName, extracTypesUrl } from '../../util/PokedexUtil/PokedexUtil'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._pokedexListService = new PokedexListService();
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    this.state = {
      loading: true,
      data,
      detailInfo: ''
    }
  }

  static navigationOptions = {
    title: 'Details',
  };

  async componentWillMount() {
    const detailInfo = await this._pokedexListService.getDetailFromPokemon(this.state.data.id);
    this.setState({
      detailInfo,
      loading: false
    });
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
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>NelioDex</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Left>
                <Thumbnail source={{ uri: this.state.data.imageUrl }} />
                <Text>{this.state.data.name}</Text>
              </Left>              
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  {this.state.detailInfo}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


