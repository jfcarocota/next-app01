import { Image, Advertisement, Header } from 'semantic-ui-react';
import React, {Component, Fragment} from 'react';
import { withRouter } from 'next/router';

class Banner extends Component {

    render = ()=> (
        <Fragment>
            <Advertisement unit='top banner' centered style={{width: '100%'}}>
                <Header color='yellow' size='huge' icon textAlign='center' style={{
                    zIndex: '1000', 
                    position: 'absolute', 
                    marginBottom: 0, 
                    width: '100%', 
                    height: 'auto'
                }}>
                    <Image src='/catlogo.jpg' circular size='massive' as='a' href='/'/>
                    <Header.Content>Comida Espongosita</Header.Content>
                </Header>
                <Image src='/catsbanner3.jpg' fluid centered/>
            </Advertisement>
        </Fragment>
    );
}

export default withRouter(Banner);