import React, {HTMLAttributes} from 'react';
import { describe, it, expect, vi, type Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { HackerNewsEntry } from '@/types/hackerNews';

vi.mock('@/hooks/useHackerNewsEntries', () => ({
    useHackerNewsEntries: vi.fn(),
}));
vi.mock('@/components/FilterBar', () => ({
    FilterBar: () => <div data-testid="filter-bar" />,
}));
vi.mock('@/components/EntriesTable', () => ({
    EntriesTable: () => <div data-testid="entries-table" />,
}));
vi.mock('react-loader-spinner', () => ({
    Oval: (props: { 'ariaLabel': string }) => (
        <div role="status" aria-label={props.ariaLabel} />
    ),
}));
vi.mock('framer-motion', () => ({
    motion: {
        div: (props: HTMLAttributes<HTMLDivElement>) => <div {...props} />,
    },
}));
vi.mock('lucide-react', () => ({
    AlertCircle: () => <svg data-testid="alert-icon" />,
}));

import { useHackerNewsEntries } from '@/hooks/useHackerNewsEntries';
import { EntriesDashboard } from './EntriesDashboard';

describe('EntriesDashboard', () => {
    const useEntriesMock = useHackerNewsEntries as Mock;

    it('shows loading spinner and message when isLoading=true', () => {
        useEntriesMock.mockReturnValue({
            data: undefined,
            isLoading: true,
            error: undefined,
        });

        render(<EntriesDashboard />);

        expect(screen.getByTestId('filter-bar')).toBeInTheDocument();
        expect(screen.getByLabelText('oval-loading')).toBeInTheDocument();
        expect(
            screen.getByText(/Fetching the latest Hacker News entries…/i)
        ).toBeInTheDocument();
    });

    it('shows error alert when error is set', () => {
        useEntriesMock.mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error('Network error'),
        });

        render(<EntriesDashboard />);

        expect(screen.getByTestId('alert-icon')).toBeInTheDocument();
        expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    });

    it('renders EntriesTable when data is available', () => {
        const mockData: HackerNewsEntry[] = [
            { rank: 1, title: 'Entry 1', points: 10, comments: 2 },
        ];
        useEntriesMock.mockReturnValue({
            data: mockData,
            isLoading: false,
            error: undefined,
        });

        render(<EntriesDashboard />);

        expect(screen.getByTestId('entries-table')).toBeInTheDocument();
    });
});
