import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import '../icon100x100.png';
import Contact from './contacts.js'

var IndexPage = React.createClass({
  getInitialState: function() {
    return{
      classes: 'col-md-3 hidden',
      classes2: 'col-md-9 top2',
      open: 'pull-right fa fa-plus hidden-xs',
      here:''
    }
  },
  sidebar: function() {
      this.setState({
        classes: 'col-md-3 leftSidebar top2',
        classes2: 'col-md-6 top2',
        open:''
      })
  },
  close: function() {
      this.setState({
        classes: 'col-md-3 hidden',
        classes2: 'col-md-9 top2',
        open: 'pull-right fa fa-plus hidden-xs'
      })
  },
  handleSearch: function(e) {
      e.preventDefault();
      var here = this.refs.here.value;
      this.setState({here:here})
      console.log("the name you typed is " + this.state.here)
  },
  render: function() {
    const {contacts} = this.props;
    contacts.sort(function(a, b){
       if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
       }
        else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
       } 
       return 0;
    });

    if (this.props.namess.length === 0){
      var contactsList = contacts.map((contact,i) => <Contact {...this.props} key={i} i={i} contact={contact} />)
    } else{
      contactsList = contacts.filter((contacta,i) => 
        contacta.name.toLowerCase().indexOf(this.props.namess.toLowerCase()) !== -1).map((contact,i) => 
        <Contact {...this.props} key={i} i={i} contact={contact} />);
    }

    if (this.state.here.length ===0){
      var contactsList_xs = contacts.map((contact,i) => <Contact {...this.props} key={i} i={i} contact={contact} />)
      
    } else{
      contactsList_xs = contacts.filter((contacta,i) => 
        contacta.name.toLowerCase().indexOf(this.state.here.toLowerCase()) !== -1).map((contact,i) => 
        <Contact {...this.props} key={i} i={i} contact={contact} />);
    }
    return(
      <div>
        <div className="row">
          <div className="col-md-3 sidebar">
            <div style={{backgroundColor:'#fff',border:'0.001em solid #d0d3d4',margin:0,padding:10}}>
              <h5 className="" ><i className="pull-left mdi mdi-account account" style={{margin:-10,marginLeft:0}}></i><b style={{padding:20}}>John Damilola</b></h5>
              
            </div>
            <div className="clearfix"></div>
            <Link to="/"><h6 className="active sidebox text-left">All <i className="blue fa fa-circle pull-right"></i> </h6></Link>
            <Link to="/family"><h6 className="sidebox text-left">Gropus <i className="blue fa fa-circle pull-right"></i> </h6></Link>
            <Link to="/family"><h6 className="sidebox text-left">Family <i className="blue fa fa-circle pull-right"></i> </h6></Link>
            <Link to="/family"><h6 className="sidebox text-left">More <i className="blue fa fa-circle pull-right"></i> </h6></Link>
            <Link to="/trash"><h6 className="sidebox text-left">Trash <i className="blue fa fa-trash pull-right"></i> </h6></Link>
          </div>


          <div className={this.state.classes2} style={{overflow:'auto'}}>
            <div className="nav col-md-6 visible-xs navbar-nav navbar-right">
                <div style={{padding:10}}>
                  <input type="text" onChange={this.handleSearch} ref="here" className="form-control" placeholder="Search for contacts" />
                </div>
            </div>
            <p>All Contacts ({contacts.length}) <i onClick={this.sidebar} className={this.state.open} style={{cursor:'pointer'}}></i> </p>
            <div className="mainbar hidden-xs" style={{overflow:'auto'}}>
              {contactsList}
            </div>
            <div className="mainbar visible-xs" style={{overflow:'auto'}}>
              {contactsList_xs}
            </div>
          </div>
          <div className={this.state.classes} >
            <h4>Edit Profile <i className="pull-right mdi mdi-close" onClick={this.close} style={{cursor:'pointer'}} ></i> </h4> 
            <hr/>   
            <div style={{backgroundColor:'#fff',margin:0}}>
              <i className="mdi mdi-account account" style={{margin:10}}></i>
              <h5 className="pull-right" style={{paddingTop:12,paddingRight:120}}>John Damilola</h5>
            </div>
            <form>
                <div className="form-group">
                    <input type="text" className="add" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="add" placeholder="Address" />
                </div>
                <div className="form-group">
                    <input type="text" className="add" placeholder="Phone no" />
                </div>
                <Button bsStyle="success" className="btn-block" onClick={this.close}>Edit</Button>
            </form>
        </div>
        </div>
      </div>
    );
  }
});

export default IndexPage;
