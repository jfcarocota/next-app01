import { withRouter } from "next/router";
import React, {Component, Fragment} from "react";
import { Divider, Grid, GridColumn, GridRow } from "semantic-ui-react";
import Banner from "./banner";
import Footer from './footer';


class MainView extends Component {

    render = ()=> (
        <Fragment>
            <Banner />
            <Divider hidden/>
            <Grid relaxed>
                <GridRow>
                    {this.props.children}
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Footer/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Fragment>
    );
}

export default withRouter(MainView);