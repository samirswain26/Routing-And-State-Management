import "./App.css";
import { useNotification } from "./context/NotificationContext";

function App() {
  const { count, addNotification } = useNotification();
  return (
    <main>
      Hello JS
      <div>
        The count is : <span>{count}</span>
      </div>
      <div>
        Add Notification count :
        <span>
          <button onClick={addNotification} >Add</button>
        </span>
      </div>
    </main>
  );
}

export default App;
