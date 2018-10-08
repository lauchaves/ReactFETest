import React, {Component} from 'react'
import App from '../../styles/reports.scss'
import Report from '../../components/Report/Report';
import uui from 'uuid';
import { ListGroup, Modal, Button } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import '../../styles/client.scss';

class Reports extends Component {

  constructor(props) {
    super(props);
    this.state ={
      reports: null,
      show: false,
      reportInfo: null,
      showModal: false,
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
        return userReports;
      });
      this.setState({ reports: userReports });
    }
  }

  handleClick = report => {
    this.setState({show: true, reportInfo: report, showModal: true});
  }

  render() {
    const showReport = this.state.show?  
    (<div>
      <MediaQuery query="(min-width: 765px)">
        <Report key={uui.v4()} reports={this.state.reportInfo}/>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 765px)">
      <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Body><Report key={uui.v4()} reports={this.state.reportInfo}/></Modal.Body>

            <Modal.Footer>
              <Button onClick={()=> this.setState({showModal:false})}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>;
      </MediaQuery>  
      </div>
    ): null;

    return(
        <div className={"onCenter"}>
        <div className={App}> 
            <h2 className={"text-center"}>My Reports</h2>
            <hr style={{width: "95%"}}/>
            <center>
            <ListGroup className="list-group col-sm-4">
            {this.state.reports && this.state.reports.map(report=>
                <details key={uui.v4()}>
                  <summary className={"text-center"} onClick={()=>this.handleClick(report)}>{report.emails && report.emails[0].email_address}</summary>
                </details>
                )}
            </ListGroup>
            </center>
            {showReport}
        </div>
        </div>
  )}
}

export default Reports;
