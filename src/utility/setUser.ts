export const setToken = (token: string) => {
    localStorage.setItem('wisdompool-user-token', token);
    return;
}

export const clearToken = () => {
    localStorage.removeItem('wisdompool-user-token');
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('wisdompool-user-token');
        return { token: token, isLoggedIn: true };
    }
    return null;

}