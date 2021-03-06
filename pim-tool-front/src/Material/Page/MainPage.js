import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import ErrorScreen from './ErrorScreen';
import ProjectScreen from "./ProjectScreen";
import CustomerScreen from "./CustomerScreen";
import SupplierScreen from "./SupplierScreen";
import ProjectList from "./ProjectList";
import EditProject from "./EditProject";
class MainPage extends React.Component {
    render() {
        return (
            <div className="main">
                <Container fluid>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <BrowserRouter>
                        <Row>
                            <Col xl={1}/>
                            <Col xl={2}>
                                <Route path="/" component={Navigation}/>
                            </Col>
                            <Col xl={9}>
                                <Switch>
                                    <Route exact path="/" component={ProjectList}/>
                                    <Route exact path="/project" component={ProjectScreen}/>
                                    <Route exact path="/customer" component={CustomerScreen}/>
                                    <Route exact path="/supplier" component={SupplierScreen}/>
                                    <Route exact path="/editProject/:id" component={EditProject}/>
                                    <Route path="/error" component={ErrorScreen}/>
                                </Switch>
                            </Col>
                        </Row>
                    </BrowserRouter>
                </Container>
            </div>
        )
    }
}

export default MainPage;