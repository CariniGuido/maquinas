import { createContext, useContext, useState } from "react";



export const LoginContext = createContext()

const usuarios = [
    {
        email: 'cariniguido@gmail.com',
        password: '123456'
    },
    {
        email: 'guidocarini8@hotmail.com',
        password: '1234'
    },
    {
        email: 'coderhouse@gmail.com',
        password: 'coder'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: '',
        logged: false,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                   error: "Password incorrecto"
                   
                })
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: "Email incorrecto"
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
        })
    }


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}