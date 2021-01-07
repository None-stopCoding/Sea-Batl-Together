import { Login } from './../Login/Login';
import 'materialize-css';
import './App.css';

const App = () => {
  return (
    <div className="sb-app">
        <div className="sb-background__ship" style={{
          backgroundImage: `linear-gradient(0deg, rgba(35, 108, 132, 0.21), rgba(81, 184, 206, 0.67)),
                            url(${process.env.PUBLIC_URL + '/images/ship.svg'})`
        }}></div>

        <Login />
    </div>
  );
};

export default App;
