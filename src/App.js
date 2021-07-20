
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Widgets from './components/Widgets.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx'
import { useStateValue } from './utils/StateProvider';
import db from './firebase';
import useWindowSize from './utils/useWindowSize';
require('dotenv').config()

function App() {
  const [user, dispatch] = useStateValue();
  const { width } = useWindowSize();
  return (
    <div className="app">
      {(width > 500) ? (
        !user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )
      ):(
      !user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <Feed />
              <Footer />
            </div>
          </>
      )
      )}
    </div>
  );
}

export default App;
