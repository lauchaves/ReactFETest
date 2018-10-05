import React, {Component} from 'react'
import App from '../../style/reports.scss'
import { cf } from '../../style/client.scss';
import Report from '../components/report';
import uui from 'uuid';

class Reports extends Component {
  

  constructor(props) {
    super(props);
    this.state ={
      reports: null,
    }
  }

  async componentDidMount() {
    await this.getReportsByUser();
  }

  getReportsByUser = async () => {
    const reports = await JSON.parse(localStorage.getItem("reports"));
    const userLogged = localStorage.getItem("userLogged");
    let userReports = [];
    if (reports) {
      reports.map(storageReport => {
        if (storageReport.user === userLogged) {
          userReports.push(storageReport.report)
        }
      });
      this.setState({ reports: userReports });
    }


  }

  render() {
    return(
        <div className={App}> 
            <h2 className={"text-center"}>My Reports</h2>
            <hr style={{width: "75%"}}/>
            {this.state.reports && this.state.reports.map(report=>
                <details key={uui.v4()}>
                  <summary className={"text-center"}>{report.emails && report.emails[0].email_address}</summary>
                  <Report key={uui.v4()} reports={report}/>
                </details>
            )}
        </div>
  )}
}

export default Reports;


