import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Banner from '../components/banner';
import Item from '../components/item';
import MainGrid from '../components/maingrid';

export default class Home extends Component {
  render = ()=> (
    <Fragment>
        <Banner />
        <Item/>
        <MainGrid />
    </Fragment>
  );
}
