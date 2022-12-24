import { getToken } from '@/utility/setUser';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

const API = axios.create({
    baseURL
});

const setToken = (token: string) => {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
}


interface ResourceType extends Record<string, any> { }
interface GetResourceType {
    message: string,
    accessToken: string
}

// Create a new resource
export const createResource = (data: ResourceType, resource: string) => {
    setToken(getToken());
    return API.post<GetResourceType>(`${baseURL}` + resource, data);
};

// Read a list of resources
export const getResources = () => {
    setToken(getToken());
    return API.get<ResourceType>('/api/resources');
};

// Read a single resource by id
export const getResourceById = (id: string) => {
    setToken(getToken());
    return API.get<ResourceType>(`/api/resources/${id}`);
};

// Update a resource
export const updateResource = (id: string, data: ResourceType) => {
    setToken(getToken());
    return API.put<ResourceType>(`/api/resources/${id}`, data);
};

// Delete a resource
export const deleteResource = (id: string) => {
    setToken(getToken());
    return API.delete(`/api/resources/${id}`);
};


