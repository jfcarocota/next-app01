import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client';
import { Container, Grid, GridColumn, Image, Header, Divider, Card, Button, Input, Icon, Label } from 'semantic-ui-react';
import {withRouter} from 'next/router'
import ImageList from '../../components/product/imagelist';
import Loading from '../../components/loading';
import Mainview from '../../components/mainview';

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
                <Container>
                  <p>
                    Precio: <strong>{`$${this.state.price}`}</strong>
                  </p>
                  <Divider/>
                  <Header>Sobre este producto</Header>
                  <p>{this.state.description}</p>
                </Container>
              </GridColumn>
              <GridColumn width={4}>
              <Card>
                <Card.Content>
                  <Card.Header>{`$${this.state.price}`}</Card.Header>
                  <Card.Meta>Envio gratis</Card.Meta>
                  <Card.Description>
                    Llega entre martes y jueves.
                  </Card.Description>
                  <Divider hidden/>
                  <Header size='large' color='green' content='Disponible'/>
                  <Divider hidden/>
                  <Input label='Cantidad' type='number' value={this.state.quantity} onChange={this.quantityChange}/>
                </Card.Content>
                <Card.Content extra>
                  <Divider hidden/>
                  <Container fluid textAlign='center'>
                    <Button as='div' labelPosition='right' color='orange'>
                      <Button color='orange'>
                        <Icon name='cart' />
                      </Button>
                      <Label basic color='orange' pointing='left' content='Agregar al carrito' />
                    </Button>
                    <Divider hidden/>
                    <Button as='div' labelPosition='right' color='orange'>
                      <Button color='orange'>
                        <Icon name='caret square right'/>
                      </Button>
                      <Label basic color='orange' pointing='left' content='Comprar ahora' />
                    </Button>
                  </Container>
                </Card.Content>
              </Card>
              </GridColumn>
            </Grid.Row>
          </Grid>
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