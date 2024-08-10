import './App.css';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className='w-1/2 my-3 mx-3'>
        <Input type="text" placeholder="example@email.com" value="" label="Email" />
      </div>
    </>
  );
}

export default App;
