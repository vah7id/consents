import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getConsents, addConsent } from '../api';
import { ConsentFormData, Consent } from '../shared/types';

// Query keys
const CONSENTS_QUERY_KEY = 'consents';

export const useConsents = () => {
  return useQuery<Consent[]>({
    queryKey: [CONSENTS_QUERY_KEY],
    queryFn: () => getConsents(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useAddConsent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (consentData: ConsentFormData) => addConsent(consentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONSENTS_QUERY_KEY] });
    },
    onError: (error) => {
      console.error('Failed to add consent:', error);
    },
  });
}; 