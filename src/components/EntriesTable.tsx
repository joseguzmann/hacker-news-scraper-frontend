import type {HackerNewsEntry} from '@/types/hackerNews';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from '@/components/ui/table';

interface EntriesTableProps {
    entries: HackerNewsEntry[];
}

export const EntriesTable = ({entries}: EntriesTableProps) => (
    <div className="w-full overflow-auto rounded-lg border border-neutral-700">
        <Table className="min-w-full divide-y divide-neutral-700">
            <TableHeader className="bg-neutral-800 sticky top-0">
                <TableRow>
                    <TableHead className="w-[64px] text-gray-200">#</TableHead>
                    <TableHead className="text-gray-200">Title</TableHead>
                    <TableHead className="text-right text-gray-200">Points</TableHead>
                    <TableHead className="text-right text-gray-200">Comments</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="bg-neutral-900 divide-y divide-neutral-700">
                {entries.map((entry) => (
                    <TableRow
                        key={entry.rank}
                        className="even:bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    >
                        <TableCell className="font-medium text-gray-100">{entry.rank}</TableCell>
                        <TableCell className="text-gray-100">{entry.title}</TableCell>
                        <TableCell className="text-right text-gray-100">{entry.points}</TableCell>
                        <TableCell className="text-right text-gray-100">{entry.comments}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);
