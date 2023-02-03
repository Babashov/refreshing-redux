import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { UpdateUser } from './actions/user-actions';

function App(props) {
  console.log(props);

  const handleClick = ()=>{
    props.dispatch(UpdateUser('Ehmed'))
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={handleClick}>Change User name</button>
      </div>
    );
  }

const mapStateToProps = (state)=>({
  state
})

export default connect(mapStateToProps)(App);
