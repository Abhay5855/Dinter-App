
import './App.css';
import Privateroutes from './components/routes/Privateroutes';
import Publicroutes from './components/routes/Publicroutes';

function App() {


     const user = false;
  return (
    <div className="App">

          {
            user ? <Privateroutes />  : <Publicroutes /> 
          }

         
            {/* <Publicroutes /> */}
             
         

      

      
     
    </div>
  );
}

export default App;
