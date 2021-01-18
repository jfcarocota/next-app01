import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';

export default class StarsRating extends Component {

    render = ()=> (
        <Rating icon='star' defaultRating={3} maxRating={5} disabled/>
    );
}