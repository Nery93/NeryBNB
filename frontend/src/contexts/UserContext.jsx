import { createContext,useContext,useEffect,useState } from 'react'
import axios from "axios"

const UserContext = createContext({
    user: null,
    setUser: (user) => {
        console.log('Setting user in context:', user);
        this.user = user;
        console.log('User in context after setting:', this.user);
    },
})
const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/users/profile");
                setUser(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };
        fetchUser();
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

export { UserContext, useUserContext };

