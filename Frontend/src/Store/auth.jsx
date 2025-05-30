import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

      // Access environment variable using import.meta.env
      const BASE_URL = import.meta.env.VITE_BACKEND_URL;

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT AUTHENTICATION - to get the user data
    const userAuthentication = async () => {
        try {
            const response = await fetch(`${BASE_URL}/auth/user`, {
            // const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data ", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]); // Added token as a dependency

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
