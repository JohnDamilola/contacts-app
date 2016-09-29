import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';


var Navbar = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  handleSubmit(e) {
      e.preventDefault();
      var name = this.refs.name.value;
      var phone = this.refs.phone.value;

      this.addContact(name,phone);
  },
  render: function() {
      const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    return(
<div>
      <nav className="navbar navv navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header col-md-3">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brands" href="#">
                    <h3 className="head text-center"><i className="fa fa-phone"></i> Contact</h3>
                </a>
            </div>
            <div className="col-md-7 text-center">
                <input type="text" className="inputs form-controls" placeholder="Search for contacts" />
            </div>
            <div className="nav col-md-2 text-center" style={{padding:0}}>
                <ul className="nav">
                    <li className="small pull-left"> <i className="mdi mdi-sort account2"></i> Sort &nbsp;</li>
                    <li className="small pull-left" style={{cursor:'pointer'}} onClick={this.open}><i className="mdi mdi-plus account2"></i> New Contact </li>
                </ul>
            </div> 
        </div>
</nav>
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
    );
  }
});

export default Navbar;
