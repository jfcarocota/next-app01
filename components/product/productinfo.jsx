import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import StarsRating from '../starsrating';


export default class ProductInfo extends Component {

    state = {
        price: this.props.price ? this.props.price : 0.00,
        description: this.props.description ? this.props.description : ''
    }

    render = ()=> (
        <Container>
            <p>
            Precio: <strong>{`$${this.state.price}`}</strong>
            </p>
            <StarsRating/>
            <Divider/>
            <Header>Sobre este producto</Header>
            <p>{this.state.description}</p>
        </Container>
    );
}