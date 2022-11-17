import React, {createContext, useState} from "react";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const [token, setToken] = useState('')
    
    const config = {
        headers: {
            Authorization: `Bearer ${token} `
        }
    }

    return (
        <UserInfoContext.Provider value={{setToken, config}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider