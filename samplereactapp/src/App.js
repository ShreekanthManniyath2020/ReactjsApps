import Header from './components/Header';
function App() {
const data = ' test data';
  return (
    <div>
      <Header data={data} />
  <p> sample description {data} </p>
  
  </div>
  );
}

export default App;
