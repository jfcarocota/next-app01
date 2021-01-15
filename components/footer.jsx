import React, {Component} from 'react';
import { Container, Grid, Header, List} from 'semantic-ui-react';

import { withRouter } from "next/router";

class Footer extends Component {

    render = ()=> (
        <footer style={{
            backgroundColor: '#ff851b'
        }}>
            <Container style={{minHeight: 400}}>
                <Grid style={{paddingTop: '8em'}} centered columns={4}>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Contacto'/>
                            <List.Item as='a'>Enviar un correo</List.Item>
                            <List.Item as='a'>Sobre nosotros</List.Item>
                            <List.Item as='a'>Aviso legal</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Trabaja con nosotros'/>
                            <List.Item as='a'>Programa de afiliados</List.Item>
                            <List.Item as='a'>Puntos de venta</List.Item>
                            <List.Item as='a'>Planes recurrentes</List.Item>
                            <List.Item as='a'>Beneficios para afiliados</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Métodos de pago'/>
                            <List.Item as='a'>Mercadopago</List.Item>
                            <List.Item as='a'>Paypal</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column style={{color: 'white'}}>
                        <Header as='h3' content='Dirección' style={{color: 'white'}}/>
                        <p>Cajeme, Sonora, México. Colonia 1 #546, calle principal, CP 5647.</p>
                        <p>Teléfono: +52 644 457 3349</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </footer>
    );
}

export default withRouter(Footer);