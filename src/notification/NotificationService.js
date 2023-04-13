import { useState, createContext, useContext } from "react"

export const Notification = ({type, text}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 50,
        backgroundImage: type === 'succes' ? 'linear-gradient(to right bottom, #005709, #0c5f09, #176608, #216e06, #2a7604, #2e7e03, #318702, #358f00, #329a00, #2da500, #24b000, #14bb00)' : 'linear-gradient(to right bottom, #570000, #5f0001, #660001, #6e0001, #760001, #7e0001, #870001, #8f0001, #9a0001, #a50001, #b00001, #bb0000)',
        color: 'white',
        padding: '10px 20px 10px 20px',
        borderRadius: 10,
    }
     
    return (
        <div style={notificationStyle}>
            <strong>{text}</strong>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: 'succes',
        text: '',
   })

   const setNotification = (type, text) => {
    setNotificationData({type, text}) 
   }

   setTimeout(() => {
    setNotificationData({type: 'succes', text: ''})
   }, 5000);

    return (
        <NotificationContext.Provider value={{setNotification}}>
            {notificationData.text && <Notification {...notificationData}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}