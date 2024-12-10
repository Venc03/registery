import { React, createContext, useState } from 'react'
import { myAxios } from './MyAxios'
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext("")
const csrf = () => myAxios.get("sanctum/csrf-cookie");

export const AuthProvider = ({ children }) => {
        const [user, setUser] = useState("");
        const navigate = useNavigate();
        const registery_fv = async (data) => {
            await csrf();
            try {
                const response = await myAxios.post("/register", data);
                console.log("Siker");
                getUser(response.data)
                navigate("/")
            } catch(err){
                console.log("Hiba tortent adat kuldeskor: ", err);
            } finally {

            }
        };

        const logout_fv = async (data) => {
            await csrf();
            try {
                const response = await myAxios.post("/logout");
                console.log("Siker");
                navigate("/reg")
            } catch(err){
                console.log("Hiba tortent kijelentkezeskor.", err);
            } finally {

            }
        };

        const getUser = async (data) => {
            await csrf();
            try {
                const response = await myAxios.get("/api/user");
                setUser(response.data);
            } catch(err){
                console.log("Hiba tortent kijelentkezeskor.", err);
            } finally {

            }
        };

        return (
            <AuthContext.Provider value={{ registery_fv, logout_fv, user }}>
                {children}
            </AuthContext.Provider>
        );
    }
