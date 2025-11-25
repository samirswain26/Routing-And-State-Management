import "./App.css";
import { useNotification } from "./context/NotificationContext";
import { useStore } from "./store/cardStore";

function App() {
  const { count, addNotification } = useNotification();
  const { num, addnum } = useStore();

  // const cart = useStore((state) => state.cart.length)
  // console.log( "Cart data is :",cart)

  const {cart}  = useStore((state) => state);
  console.log("Cart data is:", cart);

  return (
    <main>
      Hello JS
      <div>
        <span>Add Notification count :</span>
        <span>
          <button onClick={addNotification}>Add Count</button>
        </span>
        <div>
          The count is : <span>{count}</span>
        </div>
      </div>
      <div>
        <div>
          -------------------------------------------------------------------------------------
        </div>
        <div>Zustand Implementation In App</div>
        <div>
          <span>Number Increment :</span>
          <button onClick={addnum}>Add Number </button>
        </div>
        <div>The Number is : {num}</div>
        <div>
          <span>Cart length</span>
          <div>cart length is : {cart} </div>
        </div>
      </div>
    </main>
  );
}

export default App;
