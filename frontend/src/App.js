import React, {useState ,useEffect} from 'react'; 
import api from './Services/Api';

import Forms from './Components/Form/Form';
import Cards from './Components/Card/Card';
import {ListGroup} from 'react-bootstrap';

import './App.css'


function App(){

  const [repositories, setRepositories] = useState({});

  useEffect(() => {
    async function loadRepositories(){
      const response = await api.get('repositories');
      setRepositories(response.data);
    }
    loadRepositories();
  }, [repositories]);


  return (
    <div className="container">
      <main className="dashboard">
        <header className="FormBox">
          <Forms/> 
        </header>
        <main className="CardBox">
          <ListGroup>
          {
            Object.keys(repositories).map((key, index) => (
              <Cards 
              key={index}
              data={repositories[key]}
              id={key}
              />
            ))            
          }
          </ListGroup>
        </main> 
      </main>
    </div>
  );

}


export default App;
