import Aside from '../../containers/Aside'
import ContactsList from '../../containers/ContactsList'

const Home = () => (
  <>
    <Aside showFilters={true} />
    <ContactsList />
  </>
)

export default Home
