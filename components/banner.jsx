import { Container, Image, Advertisement, Header } from 'semantic-ui-react';
import React, {Component} from 'react';

export default class Banner extends Component {

    render = ()=> (
        <Advertisement unit='top banner' centered style={{width: '100%', width: '300'}}>
            <Container text textAlign='center'>
                <Header
                content='Comida Espongosita'
                style={{
                    fontWeight: 'normal',
                    fontSize: '2em',
                    marginBottom: 0,
                    marginTop: '2.5em',
                    position: 'absolute',
                    zIndex: '1000'
                }}
                />
            </Container>
            <Image src='catsbanner2.jpg' fluid/>
        </Advertisement>
    );
}