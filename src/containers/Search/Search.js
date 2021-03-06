import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import '../../styles/client.scss';
import App from '../../styles/reports.scss'
import Axios from 'axios';
import Report from '../../components/Report/Report';
import * as constants from '../../models/constants';
import MediaQuery from 'react-responsive';
import { Modal, Button } from 'react-bootstrap';


class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      newEmailSearch: '',
      loader: false,
      report: null,
      showModal: false,
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    this.setState({newEmailSearch: newValue});
   };

   setAndSaveReport = report => {
    let reportExists=false;
    let reports = JSON.parse(localStorage.getItem("reports"));
    const userLogged = localStorage.getItem("userLogged");
    const fullReport = {user: userLogged, report: report};

    if (!reports) {
      reports = [];
      reports.push(fullReport);
      localStorage.setItem("reports", JSON.stringify(reports));
    }
    else {
      reports.map(storedReport => {
        if (storedReport.user === userLogged) {
          if (storedReport.report.emails[0].email_address === fullReport.report.emails[0].email_address) {
            reportExists = true;
          }
        }
        return reportExists;
      });

      if(!reportExists){
        reports.push(fullReport);
        localStorage.setItem("reports", JSON.stringify(reports));
      }
    }
   
  };

   handleSubmit = async () => {
       this.setState({loader: true});
       const {proxyURL, requestURL} = constants;
       const email = this.state.newEmailSearch;
       const searchresponse = await Axios.get(`${proxyURL}${requestURL}${email}`);
       if (searchresponse) {
          this.setState({loader: false, report: searchresponse.data, showModal: true});
          this.setAndSaveReport(searchresponse.data);
       }
   }

  render() {
      const searchButton = this.state.loader ? null :  <button className={"buttonCustom"} type="submit" label="submit">Search</button>;
      const loader = this.state.loader ?<center><i className="fa fa-spinner fa-spin" style={{color: "#3b5998", fontSize: "30px"}}></i></center> : null;

      return (
        <div>
          <div className={App}>
            <h2 className={"text-center"}>New Search </h2>
            <hr style={{width: "75%"}} />
          </div>
          <div className={"login-form"}>
              <p className={"text-center"}>Looking to find out about someone?</p>
              <form href="#" onSubmit={ (event)=> {event.preventDefault(); this.handleSubmit();}}>
                <Field
                  className={"form-control"}
                  value= {this.state.newEmailSearch}
                  name="newEmailSearch"
                  component="input"
                  type="text"
                  placeholder="Email"
                  onChange={this.setValue}
                />
                <div>
                {loader}
                {searchButton}
                </div>
              </form>
            </div>
           
            {this.state.report && 
            <div className={App}> 
            <hr style={{width: "75%"}}/>
            
            <MediaQuery query="(min-width: 765px)">
              <div className={"onCenter"}>
                <Report reports={this.state.report}/>
              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 765px)">
            <div className="static-modal">
                <Modal show={this.state.showModal}>
                  <Modal.Body><Report reports={this.state.report}/></Modal.Body>
                  <Modal.Footer>
                    <Button onClick={()=> this.setState({showModal:false})}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>;
            </MediaQuery>  
            
            </div>
            }
          </div>
      );
  }
}
  

 export default reduxForm({ form: 'search' })(Search);