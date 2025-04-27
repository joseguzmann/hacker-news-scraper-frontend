import { Dispatch, SetStateAction } from 'react';
import type { FilterMode } from '@/types/hackerNews';

interface Props { filter: FilterMode; setFilter: Dispatch<SetStateAction<FilterMode>>; }

export const FilterBar = ({ filter, setFilter }: Props) => (
    <div className="flex items-center gap-4 my-4">
        <label className="font-medium">Filter:</label>
        <select
            value={filter ?? ''}
            onChange={e => setFilter(e.target.value as FilterMode || undefined)}
            className="border rounded p-2"
        >
            <option value="">All (raw)</option>
            <option value="longTitles">Long titles (&gt;5 words)</option>
            <option value="shortTitles">Short titles (≤5 words)</option>
        </select>
    </div>
);
