import { Container, Grid, GridColumn, GridRow, Button} from 'semantic-ui-react';
import React, {Component} from 'react';

export default class MainGrid extends Component {

    render = ()=> (
        <Container>
            <Grid celled columns={3}>
                <Grid.Row>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                    <Grid.Column>
                    <p />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}