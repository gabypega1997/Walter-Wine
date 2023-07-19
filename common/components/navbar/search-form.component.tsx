import { useEffect, useState } from "react";
import { SearchResult } from "@/common/types/wine.types";
import Image from "next/image";

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    useEffect(() => {
        const fetchSearchWine = async () => {
            const response = await fetch(`/api/wines/search?title=${query}`);
            const data = await response.json();
            setResults(data);
        };
        fetchSearchWine();
    }, [query]);

    return (
        <div>
            <div className="relative flex flex-wrap items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onBlur={() => setQuery("")}
                    className={` z-10 w-40 py-1.5 pl-3 text-sm pr-7 
                border-2 rounded-2xl  focus:outline-none lg:w-52 xl:w-64 2xl:w-72  focus:border-gray-light focus:border-1 ${
                    results.length > 0 ? " rounded-b-none " : ""
                }`}
                />
                <span className="-ml-8">
                    <Image
                        src="/images/search.png"
                        alt="search icon"
                        width={25}
                        height={20}
                    />
                </span>
            </div>

            {results.length > 0 && (
                <ul className="absolute z-50 w-40 -mt-1 bg-white border-2 border-t-0 lg:w-52 xl:w-64 2xl:w-72 border-gray-light">
                    {results.map((result) => (
                        <li
                            key={result.id}
                            className="flex p-2 text-xs border-b-2 hover:bg-slate-100"
                        >
                            <div className="text-lg">
                                <span>{result.title} </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchForm;
