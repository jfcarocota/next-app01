import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Dimmer, Loader, Segment  } from 'semantic-ui-react';

export default class Loading extends Component {

    render = ()=> (
        <Container>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' fluid/>
        </Container>
    );

}