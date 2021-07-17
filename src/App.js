
import './App.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Feed from './Feed.jsx';
import Widgets from './Widgets.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx'
import { useStateValue } from './StateProvider';
import db from './firebase';
import useWindowSize from './useWindowSize';
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
