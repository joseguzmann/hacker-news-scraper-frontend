import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EntriesTable } from './EntriesTable';
import type { HackerNewsEntry } from '@/types/hackerNews';

describe('EntriesTable', () => {
    it('renders the entries correctly', () => {
        const mockEntries: HackerNewsEntry[] = [
            { rank: 1, title: 'First Entry', points: 100, comments: 50 },
            { rank: 2, title: 'Second Entry', points: 80, comments: 30 },
        ];

        render(<EntriesTable entries={mockEntries} />);

        expect(screen.getByText('First Entry')).toBeInTheDocument();
        expect(screen.getByText('Second Entry')).toBeInTheDocument();

        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('80')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
    });
});
