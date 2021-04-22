import React from "react";
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import  SearchOutlined  from '@ant-design/icons';

export default class Teachers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

<div>
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            <div className="col-lg-4">
              <aside className="user-info-wrapper">
                <div className="user-cover" style={{backgroundImage: 'url(https://bootdey.com/img/Content/bg1.jpg)'}}>
                  <div className="info-label" data-toggle="tooltip" title data-original-title="You currently have 290 Reward Points to spend"><i className="icon-medal" /></div>
                </div>
                <div className="user-info">
                  <div className="user-avatar">
                    <a className="edit-avatar" href="#" /><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User" /></div>
                  <div className="user-data">
                    <h4>Keshav Awate</h4><span>TY Btech Information Technology</span>
                  </div>
                </div>
              </aside>
              <nav className="list-group">
              <a className="list-group-item with-badge" href="#"><i className="fa fa-th" />Home<span className="badge badge-primary badge-pill">6</span></a>

                <a className="list-group-item" href="#"><i className="fa fa-user" />Profile</a>

                <a className="list-group-item" href="#"><i className="fa fa-map" />Classroom</a>

                <a className="list-group-item with-badge" href="#"><i className="fa fa-heart" />Examinations<span className="badge badge-primary badge-pill">3</span></a>

                <a className="list-group-item with-badge active" href="#"><i className="fa fa-tag" />Calender<span className="badge badge-primary badge-pill">4</span></a>

                <a className="list-group-item with-badge active" href="#"><i className="fa fa-tag" />Drive<span className="badge badge-primary badge-pill">4</span></a>
              </nav>
            </div>
            <div className="col-lg-8">
              <div className="padding-top-2x mt-2 hidden-lg-up" />
              <div className="table-responsive margin-bottom-2x">
                <table className="table margin-bottom-none">
                  <thead>
                    <tr>
                      <th>Date Submitted</th>
                      <th>Last Updated</th>
                      <th>Type</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>08/08/2017</td>
                      <td>08/14/2017</td>
                      <td>Online</td>
                      <td><span className="text-warning">High</span></td>
                      <td><span className="text-primary">Available</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
 <div className="col-lg-auto">
        <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100 w-500"  >
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
              

              <div className="bg-white card mb-4 order-list shadow-sm w-500">
                <div className="gold-members p-4">
                  <a href="#">
                  </a>
                  <div className="media">
                    <a href="#">
                      <img className="mr-4" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                      <a href="#">
                        <span className="float-right text-info">Pre Survey-1 <i className="icofont-check-circled text-success" /></span>
                      </a>
                      <h6 className="mb-2">
                        <a href="#" />
                        <a href="#" className="text-black">Compiler Design</a>
                      </h6>
                      <p className="text-gray mb-1"><i className="icofont-location-arrow" /> Rate your understanding of compiler concepts
                      </p>
                      
                      <hr />
                    
                      <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Asked by:</span> Mrs .Kavitha S.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-white card  order-list shadow-sm">
                <div className="gold-members p-4">
                  <a href="#">
                  </a>
                  <div className="media">
                     <a href="#">
                      <img className="mr-4" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body">
                      <a href="#">
                        <span className="float-right text-info">DPre Survey-1<i className="icofont-check-circled text-success" /></span>
                      </a>
                      <h6 className="mb-2">
                        <a href="#" />
                        <a href="#" className="text-black">Predictive Analytics </a>   
                      </h6>
                      <p className="text-gray mb-1"><i className="icofont-location-arrow" /> Rate your understanding of Predictive Analytics concepts
                      </p>
                      
                      <hr />
                      
                      <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Asked by:</span>Mrs . Shubhangi Kale
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
              </div>
         </div>
          </div>
        </div>
      </div>


    );
  }
}