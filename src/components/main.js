import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

var Main = React.createClass({
  getInitialState() {
    return { 
        showModal: false ,
        namess: "",
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  handleSubmit: function(e) {
      e.preventDefault();
      var name = this.refs.name.value;
      var phone = this.refs.phone.value;

      this.addContact(name,phone);
  },
  handleSearch: function(e) {
      e.preventDefault();
      var namess = this.refs.namess.value;
      this.setState({namess:namess})
      console.log("the name you typed is " + this.state.namess)
  },
  render: function() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    return(
      <div>
        <div>
        <Navbar className="navv navbar-fixed-top">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/" className="head text-center"><i className="fa fa-phone"></i> Contact</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <div className="nav navbar-nav navbar-right">
        <li style={{paddingTop:10,cursor:'pointer'}}><i className="mdi mdi-account account2"></i> John Damilola &nbsp;</li>
        <li style={{paddingTop:10,cursor:'pointer'}} onClick={this.open}><i className="mdi mdi-plus account2"></i> Add contact</li>
      </div>
      <div className="nav col-md-6 hidden-xs navbar-nav navbar-right">
        <FormGroup>
          <input type="text" onChange={this.handleSearch} ref="namess" className="inputs form-controls" placeholder="Search for contacts" />
        </FormGroup>
     </div>
    </Navbar.Collapse>
  </Navbar>
      
<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h4><OverlayTrigger overlay={popover}><a>Add New Contact</a></OverlayTrigger></h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
            <div className="col-md-1">
                <i className="mdi mdi-account account2"></i>
            </div>
            <form className="col-md-11" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input type="text" ref="name" className="add" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="text" ref="phone" className="add" placeholder="Phone no" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-md btn-success btn-block">Add Contact</button>
                </div>
            </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
</div>
        <div className="container top">
          
          {React.cloneElement(this.props.children, {
            namess: this.state.namess,
            contacts: this.props.contacts,
          })}
        </div> 
      </div>
    );
  }
}); 

export default Main;
