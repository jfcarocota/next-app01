import {Card, Header, Image, Button} from 'semantic-ui-react';
import React, {Component} from 'react';
import {withRouter, Router} from 'next/router'

class Item extends Component {

    state = {
        id: this.props.id ? this.props.id : '',
        image: this.props.image ? this.props.image : '',
        title: this.props.title ? this.props.title : '',
        descp: this.props.descp ? this.props.descp : '',
        price: this.props.price ? this.props.price : ''
    }

    click = () =>{
        //console.log(this.props.router);
        const {id} = this.state;
        this.props.router.push({pathname: '/product', query:{id}});
    }

    render = ()=> (
        <Card fluid raised>
            <Image src={this.state.image} onClick={this.click} fluid size='small'/>
            <Card.Content>
                <Card.Header>{this.state.title}</Card.Header>
                <Card.Meta>Croquestas</Card.Meta>
                {/*<Card.Description>
                    {this.state.descp}
                </Card.Description>*/}
            </Card.Content>
            <Card.Content extra>
                <Header>{this.state.price}</Header>
                <Button inverted color='orange' onClick={this.click}>
                    Comprar
                </Button>
            </Card.Content>
        </Card>
    );
}

export default withRouter(Item);