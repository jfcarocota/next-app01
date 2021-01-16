import React, {Component} from 'react';
import { List, ListItem, Image } from 'semantic-ui-react';

export default class ImageList extends Component {

    render = ()=> (
        <List>
            <ListItem>
                <Image as='a' bordered src='https://images-na.ssl-images-amazon.com/images/I/61sR3r%2BeqCL._AC_SL1200_.jpg' size='mini'/>
            </ListItem>
            <ListItem>
                <Image as='a' bordered src='https://images-na.ssl-images-amazon.com/images/I/61sR3r%2BeqCL._AC_SL1200_.jpg' size='mini'/>
            </ListItem>
            <ListItem>
                <Image as='a' bordered src='https://images-na.ssl-images-amazon.com/images/I/61sR3r%2BeqCL._AC_SL1200_.jpg' size='mini'/>
            </ListItem>
        </List>
    );
}