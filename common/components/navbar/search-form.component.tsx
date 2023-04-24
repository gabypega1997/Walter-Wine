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
        <div className="flex items-center m-3">
            <input
                type="text"
                placeholder="Search for a product"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="py-2 pl-2 text-sm pr-7 rounded-xl focus:border-gray-light"
            />
            <span className="-ml-7">
                <Image src="/images/search.png" alt="search icon" width={20} height={20} />
            </span>

            {results.length > 0 && (
                <ul className="absolute z-50 bg-white">
                    {results.map((result) => (
                        <li key={result.id} className="flex p-2">
                            <Image
                                src="/wine1.png"
                                alt={result.title}
                                width={30}
                                height={50}
                            />
                            <span>{result.title} </span>
                            <span>${result.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchForm;
