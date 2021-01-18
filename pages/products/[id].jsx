import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client';
import { Container, Grid, GridColumn, Image, Dimmer, Loader, Segment  } from 'semantic-ui-react';
import {withRouter} from 'next/router'
import ImageList from '../../components/product/imagelist';
import Loading from '../../components/loading';
import Banner from '../../components/banner';
import Footer from "../../components/footer";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
});

const GET_PRODUCT_BY_ID = gql`
  query($id: ID!){
    getProductById(id: $id){
      id
      name
      price
      description
      imageUrl
    }
  }
`;

class Product extends Component {

  state = {
    id: this.props.id ? this.props.id : '',
    imageUrl: this.props.imageUrl ? this.props.imageUrl : '',
    images: [],
    loading: true
  }

  componentDidMount = ()=>{
    //this.get
    const {id} = this.props.router.query;
    console.log(this.props.router);
    //console.log(client);
    client.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
        id
      }
    }).then(res => {
      //console.log(res.data.getProductById);
      const {imageUrl} = res.data.getProductById;
      this.state.images.push(imageUrl);
      this.setState({id, imageUrl, loading: false});
    });
  }

  static getInitialProps({query}) {
    const {id} = query;
    return id;
  }

  productRender = ()=> {
    //console.log(this.props);
    if(!this.state.loading){
      return (
        <Container>
          <GridColumn width={1}>
            <ImageList images={this.state.images}/>
          </GridColumn>
          <GridColumn width={3}>
            <Image src={this.state.imageUrl} size='large'/>
          </GridColumn>
          <GridColumn width={3}>

          </GridColumn>
          <GridColumn width={2}>

          </GridColumn>
        </Container>
      );
    }else{
      return (
        <Loading/>
      );
    }
  }

    render = ()=> (
      <ApolloProvider client={client}>
        <Banner/>
        <Grid relaxed>
          <Grid.Row>
            {
              this.productRender()
            }
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