import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState(null);

    return <UserContext.Provider value={{ user, setUser, allUsers, setAllUsers }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    return useContext(UserContext);
};

export default UserContextProvider;
