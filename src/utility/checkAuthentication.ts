// import jwt from 'jsonwebtoken';
import { getToken } from '@/utility/setUser';

export const checkAuthentication = () => {
    const authToken = getToken();
    if (authToken?.token) {
        return true;
        // // Extract the JWT from the Authorization header
        // const token = authToken.replace('Bearer ', '');
        // // Verify the JWT and check if it is valid
        // try {
        //     jwt.verify(token, process.env.JWT_SECRET);
        //     return true;
        // } catch (error) {
        //     return false;
        // }
    }
    return false;
};