import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Banner from '../components/banner';
import MainGrid from '../components/maingrid';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { Divider, Grid, GridColumn, Image } from 'semantic-ui-react';
import MainMenu from '../components/mainmenu';
import Footer from '../components/footer';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
});

export default class Home extends Component {
  render = ()=> (
    <ApolloProvider client={client}>
      <Banner />
      <Divider hidden/>
      <Grid relaxed>
        <Grid.Row>
          <GridColumn width={3} style={{backgroundColor: '#f5f5f5'}}>
            <MainMenu/>
          </GridColumn>
          <GridColumn width={10}>
            <MainGrid columns={3}/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn>
            <Footer/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </ApolloProvider>
  );
}
