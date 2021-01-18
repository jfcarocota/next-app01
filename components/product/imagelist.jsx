import React, {Component} from 'react';
import { List, ListItem, Image } from 'semantic-ui-react';

export default class ImageList extends Component {

    state = {
        images: this.props.images ? this.props.images : []
    }

    render = ()=> {
        const {images} = this.state;
        return (
            <List>
                <ListItem>
                    <Image as='a' bordered src={images[0]} size='mini'/>
                </ListItem>
                <ListItem>
                    <Image as='a' bordered src={images[0]} size='mini'/>
                </ListItem>
                <ListItem>
                    <Image as='a' bordered src={images[0]} size='mini'/>
                </ListItem>
            </List>
        );
    }
}