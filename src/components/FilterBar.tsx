import {Dispatch, SetStateAction} from 'react';
import type {FilterMode} from '@/types/hackerNews';
import {ToggleGroup, ToggleGroupItem,} from '@/components/ui/toggle-group';
import {Tooltip, TooltipContent, TooltipTrigger,} from '@/components/ui/tooltip';
import {HelpCircle,} from 'lucide-react';

interface Props {
    filter: FilterMode;
    setFilter: Dispatch<SetStateAction<FilterMode>>;
}

export const FilterBar = ({filter, setFilter}: Props) => (
    <div
        className="w-full max-w-3xl mx-auto flex items-center justify-around gap-4 py-6 px-6 backdrop-blur-md rounded-xl shadow-lg">
        <div className="flex items-center gap-4">
            <span className="font-medium text-gray-100 select-none">Select your filter: </span>

            <ToggleGroup
                type="single"
                value={filter ?? 'raw'}
                onValueChange={(v) => setFilter(v as FilterMode)}
                className="flex gap-5 bg-neutral-800/60 p-1 px-2 rounded-lg"
            >
                <ToggleGroupItem
                    value="raw"
                    aria-label="Show all"
                    className="group px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 text-gray-400 hover:text-gray-50 hover:bg-neutral-700/60 data-[state=on]:bg-orange-500 data-[state=on]:text-white transition-colors"
                >
                    All
                </ToggleGroupItem>

                <ToggleGroupItem
                    value="longTitles"
                    aria-label="Long titles (more than 5 words)"
                    className="group px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 text-gray-400 hover:text-gray-50 hover:bg-neutral-700/60 data-[state=on]:bg-orange-500 data-[state=on]:text-white transition-colors"
                >
                    +5 words
                </ToggleGroupItem>

                <ToggleGroupItem
                    value="shortTitles"
                    aria-label="Short titles (5 words or fewer)"
                    className="group px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 text-gray-400 hover:text-gray-50 hover:bg-neutral-700/60 data-[state=on]:bg-orange-500 data-[state=on]:text-white transition-colors"
                >
                    ≤5 words
                </ToggleGroupItem>
            </ToggleGroup>
        </div>

        <Tooltip>
            <TooltipTrigger asChild>
                <HelpCircle
                    className="h-5 w-5 text-gray-400 hover:text-gray-200 cursor-pointer shrink-0 transition-colors"/>
            </TooltipTrigger>
            <TooltipContent
                side="right"
                align="center"
                className="bg-neutral-800/90 border border-neutral-700 rounded-lg p-4 shadow-lg max-w-xs"
            >
                <p className="text-sm text-gray-100 mb-2">Filtering options:</p>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                    <li>
                        <strong>All:</strong> shows every entry with no filter.
                    </li>
                    <li>
                        <strong>+5 words:</strong> titles with more than 5 words, ordered by comment count.
                    </li>
                    <li>
                        <strong>≤5 words:</strong> titles up to 5 words, ordered by points.
                    </li>
                </ul>
            </TooltipContent>
        </Tooltip>
    </div>
);
