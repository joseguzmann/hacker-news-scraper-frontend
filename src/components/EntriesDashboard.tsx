import type {FilterMode} from '@/types/hackerNews';
import {useState} from "react";
import {useHackerNewsEntries} from "@/hooks/useHackerNewsEntries";
import {FilterBar} from "@/components/FilterBar";
import {Oval} from "react-loader-spinner";
import {motion} from "framer-motion";
import {AlertCircle} from "lucide-react";
import {EntriesTable} from "@/components/EntriesTable";

export const EntriesDashboard = () => {
    const [filter, setFilter] = useState<FilterMode>();
    const {data, isLoading, error} = useHackerNewsEntries(filter);

    return (
        <main className="container mx-auto py-12 px-4 flex flex-col items-center">
            <div className="w-full mx-auto">
                <div
                    className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 p-8 rounded-2xl shadow-2xl text-center transform hover:scale-[1.02] transition-transform duration-300">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
                        Hacker News
                        <span className="text-yellow-200"> — Top 30 Entries</span>
                    </h1>
                    <p className="mt-4 text-md md:text-lg italic text-yellow-100/90">
                        by <span className="font-semibold">Jose Guzman</span>
                    </p>
                </div>
            </div>

            <FilterBar filter={filter} setFilter={setFilter}/>

            {isLoading && (
                <div className="mt-12 flex flex-col items-center">
                    <Oval
                        height={60}
                        width={60}
                        color="#F97316"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#FBBF24"
                        strokeWidth={4}
                    />
                    <p className="mt-4 text-gray-400">Fetching the latest Hacker News entries…</p>
                </div>
            )}

            {error && (
                <motion.div
                    initial={{x: -10}}
                    animate={{x: [-10, 10, -10]}}
                    transition={{duration: 0.4, repeat: 2}}
                    className="mt-12 flex items-center gap-2 bg-red-600/20 border border-red-400 text-red-700 px-4 py-3 rounded-md"
                >
                    <AlertCircle className="w-6 h-6"/>
                    <p>Error: {(error as Error).message}</p>
                </motion.div>
            )}

            {data && <EntriesTable entries={data}/>}
        </main>
    );
}
