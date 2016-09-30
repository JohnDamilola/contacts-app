import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator.js';

import Main from './components/main.js';

function mapStateToProps(state) {
  console.log("map state to props");
  return {
    contacts: state.contacts,
  } 
}

export function mapDispatchToProps(dispatch) {
  console.log("dispatching ...");
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
