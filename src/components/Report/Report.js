import React, { Component } from 'react';
import {Tab,Tabs, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import '../../styles/reports.scss';
import uuid from 'uuid';

export default class Report extends Component {
    
    
  render() {
    const { reports } = this.props;
    if (!reports) return null;

    return (
        <center>
        <Panel bsStyle="info" style={{ display:'inline-block' }}>
            <Panel.Heading>
            <Panel.Title componentClass="h3" style={{textAlign: "center"}} >Report: {reports.emails[0].email_address}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <center>
                    <Tabs style={{ display:'inline-block' }} defaultActiveKey={1} id="tab">
                        <Tab eventKey={1} title="Names">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.names &&  reports.names.map(name =><ListGroupItem key={uuid.v4()}>{name.full}</ListGroupItem>)}
                        </ListGroup>
                        </Tab>
                        <Tab eventKey={2} title="Emails">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.emails &&  reports.emails.map(email =><ListGroupItem key={uuid.v4()}>{email.email_address}</ListGroupItem>)}
                        </ListGroup>
                        </Tab>
                        <Tab eventKey={3} title="Social">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.social &&  reports.social.map((social, index) => social.type? <ListGroupItem key={uuid.v4()}><a style={{textTransform: "capitalize"}}href={ social.url }>{ social.type }</a></ListGroupItem> : null)}
                        </ListGroup>
                        </Tab>
                        <Tab eventKey={4} title="Address">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.addresses &&  reports.addresses.map(address =><ListGroupItem key={uuid.v4()}>{address.full}</ListGroupItem>)}
                        </ListGroup>
                        </Tab>
                        <Tab eventKey={5} title="Jobs">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.jobs &&  reports.jobs.map(job => job.title ? <ListGroupItem key={uuid.v4()}>{ job.title } at {job.company}</ListGroupItem> : <ListGroupItem key={uuid.v4()}>{job.company}</ListGroupItem> )}
                        </ListGroup>
                        </Tab>
                        
                        <Tab eventKey={6} title="Nicks">
                        <ListGroup style={{textAlign:'center'}}>
                            {reports.usernames &&  reports.usernames.map(username =><ListGroupItem key={uuid.v4()}>{username}</ListGroupItem>)}  
                        </ListGroup>
                        </Tab>
                    </Tabs>
                </center>
            </Panel.Body>
        </Panel>
        </center>
    );
  }
}
