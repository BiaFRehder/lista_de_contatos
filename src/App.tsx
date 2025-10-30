import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle, { Container } from './styles'
import Aside from './containers/Aside'
import ContactsList from './containers/ContactsList'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Aside />
        <ContactsList />
      </Container>
    </Provider>
  )
}

export default App
