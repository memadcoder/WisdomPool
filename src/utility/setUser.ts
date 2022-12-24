export const setToken = (token: string) => {
    localStorage.setItem('wisdompool-user-token', token);
    return;
}

export const getToken = () => {
    const token = localStorage.getItem('wisdompool-user-token');
    return token;
}