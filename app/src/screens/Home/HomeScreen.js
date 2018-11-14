import React from 'react';

import { Container, Grid, Col, Row, Header, Title, Spinner, List, ListItem, Thumbnail, Content, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';

import PokedexList from '../../components/PokedexList/PokedexList'
import PokedexListService from "../../services/PokedexList/PokedexListService";
import PokedexActionSheet from "../../components/PokedexActionSheet/PokedexActionSheet";
import { extractTypesName, extracTypesUrl } from '../../util/PokedexUtil/PokedexUtil'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._pokedexListService = new PokedexListService();
    this.state = {
      entries: [],
      types: [],
      loading: true
    }
  }

  static navigationOptions = {
    title: 'Home',
  };

  async componentWillMount() {
    const entries = await this._pokedexListService.getAllPokemons();
    const types = await this._pokedexListService.getAllTypes();
    this.setState({
      entries,
      types,
      loading: false
    });
    console.log('finished loading');
  }

  async _onActionSelected(option) {
    if (option) {
      this.setState({ loading: true });
      const urlArray = extracTypesUrl(this.state.types);
      const data = await this._pokedexListService.getPokemonsFromType(urlArray[option]);
      this.setState({ entries: data })
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Grid style={{ alignItems: 'center' }}>
            <Col>
              <Spinner color='red' />
            </Col>
          </Grid>
        </Content>
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
          <Grid>
            <Row>
              <Col>
                <PokedexActionSheet
                  title="Select a pokemon type"
                  options={extractTypesName(this.state.types)}
                  onActionSelected={(option) => this._onActionSelected(option)}
                />
              </Col>
            </Row>
            <Col>
              <PokedexList entries={this.state.entries} navigation={this.props.navigation}/>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}


