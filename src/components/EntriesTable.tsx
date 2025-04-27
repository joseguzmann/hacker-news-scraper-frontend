import type { HackerNewsEntry } from '@/types/hackerNews';

export const EntriesTable = ({ entries }: { entries: HackerNewsEntry[] }) => (
    <table className="w-full border-collapse">
        <thead>
        <tr className="bg-gray-100 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Title</th>
            <th className="p-2">Points</th>
            <th className="p-2">Comments</th>
        </tr>
        </thead>
        <tbody>
        {entries.map(e => (
            <tr key={e.rank} className="border-t">
                <td className="p-2">{e.rank}</td>
                <td className="p-2">{e.title}</td>
                <td className="p-2">{e.points}</td>
                <td className="p-2">{e.comments}</td>
            </tr>
        ))}
        </tbody>
    </table>
);
