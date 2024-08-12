import { useContext } from 'react';
import ContactForm from './modules/ContactForm';
import Footer from './modules/Footer';
import Header from './modules/Header';
import ResourcesBlock from './modules/ResourcesBlock';
import { Context } from './context';
import SuccessForm from './modules/SuccessForm';

function App() {
  const { isSubmitted } = useContext(Context); // This checks if our contact form was submitted successfully

  return (
    <>
      <Header />
      {isSubmitted ? <SuccessForm /> : <ContactForm />}
      <ResourcesBlock />
      <Footer />
    </>
  );
}

export default App;
