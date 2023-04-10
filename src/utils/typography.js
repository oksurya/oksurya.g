import Typography from 'typography'
import githubTheme from 'typography-theme-github'


githubTheme.overrideThemeStyles = {
    'blockquote': {
      color: '#800099'
    },
    'a': {
      display: 'inline-block',
      position: 'relative',
      color: '#0087ca'
    },
    'a:after': {
      content: '',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#0087ca',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out'
    },
    'a:hover:after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left'
    }
  };
  


const typography = new Typography(githubTheme)

export default typography