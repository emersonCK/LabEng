import logo from './logo.svg';
import './App.css';
import TesteComponentDidUpdate from './TesteComponentDidUpdate';
import TesteShouldComponentUpdate from './TesteShouldComponentUpdate';
import Mensagem from './Mensagem';
import TesteComponentDidMount from './TesteComponentDidMount';
import TesteGetDerivedStateFromProps from './TesteGetDerivedStateFromProps';
import TesteGetSnapshotBeforeUpdate from './TesteGetSnapshotBeforeUpdate';
import TesteComponentWillUnmount from './TesteComponentWillUnmount';

function App() {
  return (
    <div>

      <Mensagem />
      <TesteComponentDidMount />
      <TesteComponentDidUpdate />
      <TesteShouldComponentUpdate />
      <TesteGetDerivedStateFromProps favcol="Amarelo" />
      <TesteGetSnapshotBeforeUpdate />
      <TesteComponentWillUnmount />
      
    </div>
  );
}

export default App;
