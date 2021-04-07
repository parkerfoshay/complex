import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './pages/OtherPage';
import FibPage from './pages/FibPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1>Fib calculater</h1>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>
        <div>
          <Route exact path='/' component={FibPage} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
