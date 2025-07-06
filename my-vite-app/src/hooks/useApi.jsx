import { useState, useEffect } from 'react';
import ApiService from '../services/api';

// Custom hook for API calls
export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err);
        console.error('API call failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Specific hooks for each API endpoint
export const usePersonalInfo = () => {
  return useApi(() => ApiService.getPersonalInfo());
};

export const useTechCategories = () => {
  return useApi(() => ApiService.getTechCategories());
};

export const useProjects = (category = null) => {
  return useApi(() => ApiService.getProjects(category), [category]);
};

export const useProject = (id) => {
  return useApi(() => ApiService.getProject(id), [id]);
};

export const useTimeline = () => {
  return useApi(() => ApiService.getTimeline());
};

export const useCertifications = () => {
  return useApi(() => ApiService.getCertifications());
};

export const useGitHubStats = () => {
  return useApi(() => ApiService.getGitHubStats());
};

export const useCurrentlyExploring = () => {
  return useApi(() => ApiService.getCurrentlyExploring());
};

// Hook for contact form submission
export const useContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitMessage = async (message) => {
    try {
      setSubmitting(true);
      setError(null);
      const result = await ApiService.submitContactMessage(message);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  return { submitMessage, submitting, error };
};