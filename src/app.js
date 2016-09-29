//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/main.js';

function mapStateToProps(state) {
  console.log("map state to props");
  return {
    contacts: state.contacts,
  } 
}

const App = connect(mapStateToProps)(Main);

export default App;
