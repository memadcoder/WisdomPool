import { getToken } from '@/utility/setUser';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

const API = axios.create({
    baseURL
});

const setToken = (token: string) => {
    console.log("token", token)
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
}


interface ResourceType extends Record<string, any> { }
interface GetResourceType {
    message: string,
    accessToken: string,
    user: object;
}

// Create a new resource
export const createResource = (data: ResourceType, resource: string) => {
    // setToken(getToken()?.token);
    return API.post<GetResourceType>(`${baseURL}` + resource, data);
};

// Read a list of resources
export const getResources = () => {
    // setToken(getToken()?.token);
    return API.get<ResourceType>('/api/resources');
};

// Read a single resource by id
export const getResourceById = (id: string) => {
    // setToken(getToken()?.token);
    return API.get<ResourceType>(`/api/resources/${id}`);
};

// Update a resource
export const updateResource = (id: string, data: ResourceType) => {
    // setToken(getToken()?.token);
    return API.put<ResourceType>(`/api/resources/${id}`, data);
};

// Delete a resource
export const deleteResource = (id: string) => {
    // setToken(getToken()?.token);
    return API.delete(`/api/resources/${id}`);
};


