import {Card, Header, Image, Button} from 'semantic-ui-react';
import React, {Component} from 'react';

export default class Item extends Component {

    state = {
        image: this.props.image ? this.props.image : '',
        title: this.props.title ? this.props.title : '',
        descp: this.props.descp ? this.props.descp : '',
        price: this.props.price ? this.props.price : ''
    }

    render = ()=> (
        <Card fluid raised>
            <Image src={this.state.image} href='#' fluid/>
            <Card.Content>
                <Card.Header>{this.state.title}</Card.Header>
                <Card.Meta>Croquestas</Card.Meta>
                {/*<Card.Description>
                    {this.state.descp}
                </Card.Description>*/}
            </Card.Content>
            <Card.Content extra>
                <Header>{this.state.price}</Header>
                <Button inverted color='orange'>
                    Comprar
                </Button>
            </Card.Content>
        </Card>
    );
}