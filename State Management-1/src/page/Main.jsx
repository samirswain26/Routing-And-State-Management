import { useNotification } from "../context/NotificationContext";

const Main = () => {
  const { count } = useNotification();
  return (
    <div>
      Main page
      <div>
        The count is :<span>{count}</span>
      </div>
    </div>
  );
};

export default Main;
