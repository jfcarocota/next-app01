import React, { Component } from "react";
import { Button, Card, Container, Divider, Header, Icon, Input, Label } from "semantic-ui-react";

export default class CardPay extends Component {

    state = {
        price: this.props.price ? this.props.price : 0.00
    }

    render = ()=> (
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
    );
}