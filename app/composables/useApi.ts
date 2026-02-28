import { useFetch } from '#app';

export const useApi = () => {
    const config = useRuntimeConfig();

  // GET-запрос
  const fetchData = async (endpoint: string) => {
    return await $fetch(`${config.public.apiBaseUrl}${endpoint}`);
  };

  return {
    fetchData
  };
};