import './App.css';

import {
  Container
} from "react-bootstrap";

function App() {

  const data = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso' ]
  var value = 'Tarjaya';
  const newData = data.find((str) => str === value);
  console.log('Value Of Search :', value)
  console.log('Search Data :', newData)
  return (
    <div>
      <Container>
        <h3 className="text-center mt-5">
          Logic
        </h3>
        <h4 className="text-center mt-5 gap-5">
          {data}
        </h4>
        <h4 className="text-center mt-5 gap-5">
          Search Data :{newData}
        </h4>
      </Container>
    </div>
  );
}

export default App;
