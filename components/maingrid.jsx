import { Container, Grid, GridColumn, GridRow, Button, CardGroup} from 'semantic-ui-react';
import React, {Component} from 'react';
import { gql, getApolloContext } from '@apollo/client';
import _ from "lodash";
import Item from './item';

const GET_PRODUCTS = gql`
    {
        products{
            id
            name
            price
            description
            imageUrl
        }
    }
`;

export default class MainGrid extends Component {

    static contextType = getApolloContext();

    state = {
        items: [],
        columns: this.props.columns ? this.props.columns : 1
    }

    componentDidMount = ()=>{
        const { client } = this.context;

        client.query({query: GET_PRODUCTS})
        .then(res => {
            const { products } = res.data;
            this.setState({
                items: products.map((product, i) => (
                    <Item
                    key={i}
                    id={product.id}
                    image={product.imageUrl}
                    title={product.name.substr(0, 20)}
                    descp={product.description}
                    price={`${Number(product.price)} MXN`}
                    />   
            ))});
        });
    }

    render = ()=> (
        <Container>
            <CardGroup centered itemsPerRow={this.state.columns} >
                {this.state.items}
            </CardGroup>
        </Container>
    );
}