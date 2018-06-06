import styled from 'styled-components'
import { Box } from 'grid-styled'

const theme = {
  font: {
    primary: '3rem',
    secondary: '1.15rem',
    section: '2rem',
    button: '1.12rem',
    subtitle: '1rem',
  },
  color: {
    darkPurple: '#4B5DAE',
    lightPurple: '#6074c8',
    green: '#89B4A8',
    altTitle: '#1A2237',
    altSecondary: '#1E2845',
  },
}

const BoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  align-items: center;
  justify-content: center;
`

export {
  theme,
}
