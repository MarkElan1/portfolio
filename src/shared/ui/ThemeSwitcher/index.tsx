import { useDarkTheme } from 'shared/lib/useDarkTheme';
import './index.scss';

const ThemeScwitcer = () => {
  const {darkTheme, toggleTheme} = useDarkTheme(state => state);

  return (
    <div className={`theme-switcher ${darkTheme ? 'dark' : ''}`} onClick={toggleTheme}>
      <div className="roll"></div>
    </div>
  )
}

export default ThemeScwitcer;
