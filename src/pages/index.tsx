import { useState } from 'react';
import { useHackerNewsEntries } from '@/hooks/useHackerNewsEntries';
import { FilterBar } from '@/components/FilterBar';
import { EntriesTable } from '@/components/EntriesTable';
import type { FilterMode } from '@/types/hackerNews';

export default function Home() {
  const [filter, setFilter] = useState<FilterMode>();
  const { data, isLoading, error } = useHackerNewsEntries(filter);

  return (
      <main className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Hacker News – Top 30</h1>

        <FilterBar filter={filter} setFilter={setFilter} />

        {isLoading && <p>Cargando…</p>}
        {error && <p className="text-red-600">Error: {(error as Error).message}</p>}

        {data && <EntriesTable entries={data} />}
      </main>
  );
}
