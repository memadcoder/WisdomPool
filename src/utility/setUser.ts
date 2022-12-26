export const setToken = (token: string, user: object) => {
    localStorage.setItem('wisdompool-user-token', token);
    localStorage.setItem('wisdompool-user', JSON.stringify(user))
    return;
}

export const clearToken = () => {
    localStorage.removeItem('wisdompool-user-token');
    localStorage.removeItem('wisdompool-user');
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('wisdompool-user-token');
        const user = localStorage.getItem('wisdompool-user');
        return { token, user: JSON.parse(user) };
    }
    return null;

}