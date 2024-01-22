import Home from 'pages/home';
import './index.scss'
import { useDarkTheme } from 'shared/lib/useDarkTheme';

function App() {
  const darkTheme = useDarkTheme(state => state.darkTheme);

  if (window.innerWidth <= 900) {
    return (
      <div className={`NotSupported ${darkTheme ? 'dark' : ''}`}>
        <h1 className='title'>Not supported on mobile</h1>
        <span className='sub-title'>Coming Soon</span>
      </div>
    )
  }

  return (
    <div className={`App ${darkTheme ? 'dark' : ''}`}>
      <Home/>
    </div>
  )
}

export default App;