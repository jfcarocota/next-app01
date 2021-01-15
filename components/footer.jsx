import React, {Component} from 'react';
import { Container, Grid, List} from 'semantic-ui-react';

export default class Footer extends Component {

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
                            <List.Item as='a'>Únete al equipo espongoso uwu</List.Item>
                            <List.Item as='a'>Aviso legal</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Contacto'/>
                            <List.Item as='a'>Enviar un correo</List.Item>
                            <List.Item as='a'>Sobre nosotros</List.Item>
                            <List.Item as='a'>Únete al equipo espongoso uwu</List.Item>
                            <List.Item as='a'>Aviso legal</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Contacto'/>
                            <List.Item as='a'>Enviar un correo</List.Item>
                            <List.Item as='a'>Sobre nosotros</List.Item>
                            <List.Item as='a'>Únete al equipo espongoso uwu</List.Item>
                            <List.Item as='a'>Aviso legal</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted style={{color: 'white'}} size='large'>
                            <List.Header as='h3' content='Contacto'/>
                            <List.Item as='a'>Enviar un correo</List.Item>
                            <List.Item as='a'>Sobre nosotros</List.Item>
                            <List.Item as='a'>Únete al equipo espongoso uwu</List.Item>
                            <List.Item as='a'>Aviso legal</List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Container>
        </footer>
    );
}