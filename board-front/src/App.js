import './App.css';
import BoardTemplate from './components/BoardTemplate';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import { Link, Route ,Switch} from 'react-router-dom';

function App() {


  return (
    <>
      <BoardTemplate>
        <Route exact path="/" component={BoardList}/>
        <Route exact path="/board/:id" component={BoardDetail}/>
      </BoardTemplate>
    </>
  );
}

export default App;
