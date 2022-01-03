import logo from './logo.svg';
import './App.css';
import State from './State';
const titles = ['hello peeps','what is going on','idk']
function App() {
  return (
    <section>
      {titles.map((el,index) => {
        return (
          <State key={index}staticTitle={el}/>
        )
      })}
    </section>
  );
}

export default App;
