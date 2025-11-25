import { useNotification } from "../context/NotificationContext";
import { useStore } from "../store/cardStore";

const Main = () => {
  const { count } = useNotification();

  const { num} = useStore();

  return (
    <div>
        <div>-----------------------------------------------------------------------------------------</div>
      <div>
        Main page Content
        <div>
          The count is : <span>{count}</span>
        </div>
      </div>

      <div>
        -------Zustand Data in main page-------
        <div>
          Number is : <span>{num}</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
