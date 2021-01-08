import { Login } from './../Login/Login';
import { LanguageProvider } from './LanguageProvider';
import 'materialize-css';
import './App.css';

const App = () => {
  return (
    <LanguageProvider defaultLanguage='russian'>
        <div className="sb-background__ship" style={{
          backgroundImage: `linear-gradient(0deg, rgba(35, 108, 132, 0.21), rgba(81, 184, 206, 0.67)),
                            url(${process.env.PUBLIC_URL + '/images/ship.svg'})`
        }}></div>

        <Login />
    </LanguageProvider>
  );
};

export default App;
