import { HTTP, URLS } from "./http"


const ROUTE = '/api/auth'


export const login = async (credentials) => {
    try {
        const result = await HTTP.POST(URLS.URL_API + ROUTE + '/login', credentials);
        if (!result.ok) {
            const errorData = await result.json();
            throw new Error(errorData.message || 'Error al iniciar sesión');
        } else {
            localStorage.setItem('token', result.token);
            return result.json();
        }
    } 
    catch (error) {
        throw new Error(error.message || 'Error inesperado');
    }
};

export const register = async (usuario) => {
    try {
        const result = await HTTP.POST(URLS.URL_API + ROUTE + '/register', usuario);
        if (!result.ok) {
            const errorData = await result.json();
            throw new Error(errorData.message || 'Error al registrar');
        }
        return result.json();
    } 
    catch (error) {
        try {
            const parsedError = JSON.parse(error.message);
            throw new Error(parsedError.message || 'Error inesperado');
        } catch (e) {
            throw new Error(error.message || 'Error inesperado');
        }
    }
};







export const verificarToken = async () => {
    try{
    const token = localStorage.getItem('token')
    const headers = new Headers()
    headers.append('Authorization', token)

    const result = await HTTP.GET(URLS.URL_API + ROUTE + '/verify-token', headers)
        return result
    }
    catch(error){
        console.log(error)
        throw {message: error.message}
        
    }
}