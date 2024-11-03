import axios, { AxiosProgressEvent } from 'axios';
import { TriviaResponse, TriviaQuestion } from '@/types';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchTriviaQuestions = async (
  amount: number = 1,
  onProgress?: (progress: number) => void
): Promise<TriviaQuestion[]> => {
  try {
    const response = await axiosInstance.get<TriviaResponse>(
      `https://opentdb.com/api.php?amount=${amount}`,
      {
        onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.lengthComputable) {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total!) * 100
            );
            if (onProgress) {
              onProgress(progress);
            }
          }
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    throw error;
  }
};

export { fetchTriviaQuestions };
