import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Mock } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useHackerNewsEntries } from './useHackerNewsEntries';
import { api } from '@/lib/api';

vi.mock('@/lib/api', () => ({
    api: { get: vi.fn() },
}));

function createWrapper() {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

describe('useHackerNewsEntries', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches data without filter', async () => {
        const mockData = [{ rank: 1, title: 'Test A', points: 10, comments: 5 }];
        (api.get as Mock).mockResolvedValue({ data: mockData });

        const { result, waitFor } = renderHook(() => useHackerNewsEntries(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => result.current.isSuccess);

        expect(api.get).toHaveBeenCalledWith('/hacker-news/entries', { params: undefined });
        expect(result.current.data).toEqual(mockData);
    });

    it('fetches data with filter', async () => {
        const mockData = [{ rank: 2, title: 'Test B', points: 20, comments: 8 }];
        (api.get as Mock).mockResolvedValue({ data: mockData });

        const { result, waitFor } = renderHook(() => useHackerNewsEntries('longTitles'), {
            wrapper: createWrapper(),
        });

        await waitFor(() => result.current.isSuccess);

        expect(api.get).toHaveBeenCalledWith('/hacker-news/entries', {
            params: { filter: 'longTitles' },
        });
        expect(result.current.data).toEqual(mockData);
    });

    it('handles errors', async () => {
        const error = new Error('Network fail');
        (api.get as Mock).mockRejectedValue(error);

        const { result, waitFor } = renderHook(() => useHackerNewsEntries(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => result.current.isError);

        expect(result.current.error).toBe(error);
    });
});
