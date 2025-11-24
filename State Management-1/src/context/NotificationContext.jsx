import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount((prev) => prev + 1);
  };

  const resetNotification = () => {
    setCount(0);
  };

  //NotificationContext jo variable woh createContext function call karta hai...
  // And it has a provider as shown below
  // It accepts a value that is required for the childrens to access those values like "addNotificaion" ,
  // And its also accepts that to where the data/information should be available that is the "children" as shown in the below...


  return (
    <NotificationContext.Provider
      value={{ addNotification, resetNotification, count }}
    >
      {children}
    </NotificationContext.Provider>
  );
}


// Custom Hooks ---> is used to exposed some data... (Rough meaning)

export function useNotification(){
    return useContext(NotificationContext)
}


// basically when the createContext is used the useContext is initiallized from behind the scene 
// And the createContext create a store to put the data in it by the business logic functions and the using the provider
// After successfully adding those data into it, the "useContext" is used to get the data where ever you want to show it...