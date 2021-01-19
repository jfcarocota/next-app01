import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client';
import { Container, Grid, GridColumn, Image, Header, Divider, Card, Button, Input, Icon, Label } from 'semantic-ui-react';
import {withRouter} from 'next/router'
import ImageList from '../../components/product/imagelist';
import Loading from '../../components/loading';
import Mainview from '../../components/mainview';
import StarsRating from '../../components/starsrating';
import Comments from '../../components/comments';
import ProductInfo from '../../components/product/productinfo';
import CardPay from '../../components/product/cardpay';

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
    price: '',
    description: '',
    imageUrl: this.props.imageUrl ? this.props.imageUrl : '',
    images: [],
    quantity: 1,
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
      const {imageUrl, price, description} = res.data.getProductById;
      this.state.images.push(imageUrl);
      this.setState({id, price, description, imageUrl, loading: false});
    });
  }

  static getInitialProps({query}) {
    const {id} = query;
    return id;
  }

  quantityChange = e => this.setState({quantity: e.target.value < 1 ? 1 : e.target.value})

  productRender = ()=> {
    //console.log(this.props);
    if(!this.state.loading){
      return (
        <Container style={{width: '85%'}}>
          <Grid columns={3} centered>
            <Grid.Row>
              <GridColumn width={1}>
                <ImageList images={this.state.images}/>
              </GridColumn>
              <GridColumn width={6}>
                <Image src={this.state.imageUrl} size='large'/>
              </GridColumn>
              <GridColumn width={4}>
                <ProductInfo price={this.state.price} description={this.state.description}/>
              </GridColumn>
              <GridColumn width={4}>
                <CardPay price={this.state.price}/>
              </GridColumn>
            </Grid.Row>
          </Grid>
          <Comments/>
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
        <Mainview>
          {this.productRender()}
        </Mainview>
      </ApolloProvider>
    );
}

export default  withRouter(Product);