// import ship from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="ship" style={{
          backgroundImage: `linear-gradient(0deg, rgba(35, 108, 132, 0.21), rgba(81, 184, 206, 0.67)),
                            url(${process.env.PUBLIC_URL + '/images/ship.svg'})`
        }}></div>
    </div>
  );
};

export default App;
