import Home from 'pages/home';
import './index.scss'
import { useDarkTheme } from 'shared/lib/useDarkTheme';

function App() {
  const darkTheme = useDarkTheme(state => state.darkTheme);

  return (
    <div className={`App ${darkTheme ? 'dark' : ''}`}>
      <Home/>
    </div>
  )
}

export default App;