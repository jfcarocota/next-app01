import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MainMenu extends Component {
    state = { activeItem: 'Mejor puntuación' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render = ()=> {

        const { activeItem } = this.state;

        return (
            <Menu vertical fluid text color='blue' style={{paddingLeft: '2em'}}>
                <Menu.Item header content='Filtros'/>
                <Menu.Item
                name='Mejor puntuación'
                active={activeItem === 'Mejor puntuación'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Precio más bajo'
                active={activeItem === 'Precio más bajo'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Mayor precio'
                active={activeItem === 'Mayor precio'}
                onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
    }