import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FilterBar} from './FilterBar';

describe('FilterBar', () => {
    it('renders all toggle options', () => {
        const setFilter = vi.fn();
        render(<FilterBar filter="raw" setFilter={setFilter} />);
        expect(screen.getByLabelText('Show all')).toBeInTheDocument();
        expect(
            screen.getByLabelText('Long titles (more than 5 words)')
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Short titles (5 words or fewer)')
        ).toBeInTheDocument();
    });

    it('calls setFilter with the correct value when clicking an option', async () => {
        const setFilter = vi.fn();
        render(<FilterBar filter="raw" setFilter={setFilter} />);
        const longBtn = screen.getByLabelText(
            'Long titles (more than 5 words)'
        );
        await userEvent.click(longBtn);
        expect(setFilter).toHaveBeenCalledWith('longTitles');

        const shortBtn = screen.getByLabelText(
            'Short titles (5 words or fewer)'
        );
        await userEvent.click(shortBtn);
        expect(setFilter).toHaveBeenCalledWith('shortTitles');
    });

    it('highlights the active filter', () => {
        const setFilter = vi.fn();
        render(<FilterBar filter="shortTitles" setFilter={setFilter} />);
        const shortBtn = screen.getByLabelText(
            'Short titles (5 words or fewer)'
        );
        expect(shortBtn).toHaveAttribute('data-state', 'on');
    });
});
