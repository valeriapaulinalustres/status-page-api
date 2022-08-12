import Cards from './components/cards/Cards';
import './App.css'


function App() {

  let requests = ["accounts", "assets", "customers", "datapoints", "devices", "documents", "forms", "invites", "media", "messages", "namespaces", "orders", "patients", "relationships", "rules", "templates", "users", "workflows"]

  return (
    <div>
      <h1 className='app-title'>Status Dashboard</h1>
      <Cards requests={requests} />
    </div>
  );
}

export default App;