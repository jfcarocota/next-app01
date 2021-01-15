import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { Grid, GridColumn, Image } from 'semantic-ui-react';
import Footer from '../../components/footer';
import {withRouter} from 'next/router'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});


class Product extends Component {

  componentDidMount = ()=>{
    console.log(this.props.router.query);
  }

    render = ()=> (
      <ApolloProvider client={client}>
        <Grid relaxed>
          <Grid.Row>
            
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

export default  withRouter(Product);