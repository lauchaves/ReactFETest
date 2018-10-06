import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from '../../styles/client.scss';
import App from '../../styles/reports.scss'
import Axios from 'axios';
import Report from '../../components/Report/Report';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      newEmailSearch: '',
      loader: false,
      report: null,
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    this.state.newEmailSearch = newValue;
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
      });

      if(!reportExists){
        reports.push(fullReport);
        localStorage.setItem("reports", JSON.stringify(reports));
      }
    }
   
  };

   handleSubmit = async () => {
       this.setState({loader: true});
       const email = this.state.newEmailSearch;
       const proxyURL = "https://cors-anywhere.herokuapp.com/";
       const requestURL = "https://www.beenverified.com/hk/dd/email?email="+email;
       const searchresponse = await Axios.get(proxyURL + requestURL);
       if (searchresponse) {
          this.setState({loader: false, report: searchresponse.data});
          this.setAndSaveReport(searchresponse.data);
       }
   }

  render() {
      const searchButton = this.state.loader ? null :  <button className={cf("buttonCustom")} type="submit" label="submit">Search</button>;
      const loader = this.state.loader ?<center><i className="fa fa-spinner fa-spin" style={{color: "#3b5998", fontSize: "30px"}}></i></center> : null;

      return (
        <div>
          <div className={App}>
            <h2 className={"text-center"}>New Search </h2>
            <hr style={{width: "75%"}} />
          </div>
          <div className={cf("login-form")}>
              <form href="#" onSubmit={ (event)=> {event.preventDefault(); this.handleSubmit();}}>
                <Field
                  className={cf("form-control")}
                  value= {this.state.newEmailSearch}
                  name="newEmailSearch"
                  component="input"
                  type="text"
                  placeholder="Email"
                  onChange={this.setValue}
                />
                <div className={cf("form-control")}>
                {loader}
                {searchButton}
                </div>
              </form>
            </div>
           
            {this.state.report && 
            <div className={App}> 
            <hr style={{width: "75%"}}/>
                <details>
                  <summary className={"text-center"}>{this.state.newEmailSearch}</summary>
                  <Report reports={this.state.report}/>
                </details>
            </div>
            }
          </div>
      );
  }
}
  

 export default reduxForm({ form: 'search' })(Search);