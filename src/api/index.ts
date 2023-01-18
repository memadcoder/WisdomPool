import { getToken } from '@/utility/setUser';
import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const API = axios.create({
    baseURL
});

const setToken = (token: string) => {
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
    setToken(getToken()?.token);
    return API.post<GetResourceType>(`${baseURL}` + resource, data);
};

// Read a list of resources
export const getResources = (resource: string) => {
    setToken(getToken()?.token);
    return API.get<GetResourceType>(`${baseURL}` + resource);
};

// Read a single resource by id
export const getResourceById = (id: string) => {
    // setToken(getToken()?.token);
    return API.get<ResourceType>(`/api/resources/${id}`);
};

// Update a resource
export const updateResources = (data: ResourceType, resource: string) => {
    // setToken(getToken()?.token);
    return API.put<ResourceType>(`${baseURL}` + resource, data);
};

// Update a resource
export const updateResource = (data: ResourceType, resource: string) => {
    setToken(getToken()?.token);
    return API.patch<ResourceType>(`${baseURL}` + resource, data);
};

// Delete a resource
export const deleteResource = (id: string, resource: string) => {
    setToken(getToken()?.token);
    return API.delete(`${baseURL}` + resource + `/${id}`);
};


