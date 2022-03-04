import './App.css';

import {
  Container,
} from "react-bootstrap";

function App() {
  const data = [8, 2, 20, -7, 25, -1, 5];
  data.sort(function(a, b){return a - b});
  return (
    <div>
      <Container>
        <h3 className="text-center mt-5">
          Logic
        </h3>
        <h4 className="text-center mt-5 gap-5">
          {data}
        </h4>
      </Container>
    </div>
  );
}

export default App;
