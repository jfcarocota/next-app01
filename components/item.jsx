import { Container, Card, Icon, Button, Header} from 'semantic-ui-react';
import React, {Component} from 'react';

export default class Item extends Component {

    render = ()=> (
        <Card
        image='https://images-na.ssl-images-amazon.com/images/I/6186ChiaQ1L._AC_SL1000_.jpg'
        header='Deli mix cat chow'
        meta='Croquestas'
        description='Comida deli mix cat chow, para gato adulto.'
        extra={<Header>$799,99 MXN</Header>}
        />
    );
}