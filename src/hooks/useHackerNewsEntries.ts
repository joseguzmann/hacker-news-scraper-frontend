import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { HackerNewsEntry, FilterMode } from '@/types/hackerNews';

const getEntries = async (filter?: FilterMode): Promise<HackerNewsEntry[]> => {
    const params = filter ? { filter } : undefined;
    const { data } = await api.get<HackerNewsEntry[]>('/hacker-news/entries', { params });

    return data;
};

export const useHackerNewsEntries = (filter?: FilterMode) =>
    useQuery({
        queryKey: ['hn-entries', filter],
        queryFn:  () => getEntries(filter),
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false
    });
