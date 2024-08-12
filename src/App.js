import { useContext } from 'react';
import ContactForm from './modules/ContactForm';
import Footer from './modules/Footer';
import Header from './modules/Header';
import ResourcesBlock from './modules/ResourcesBlock';
import { Context } from './context';

function App() {
  const { isSubmitted } = useContext(Context);

  console.log(isSubmitted);

  return (
    <>
      <Header />
      <ContactForm />
      <ResourcesBlock />
      <Footer />
    </>
  );
}

export default App;
