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
        <div className="m-3">
            <input
                type="text"
                placeholder="Search for a product"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
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

// import { useState } from "react";
// import axios from "axios";

// function Search() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);

//   const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const response = await axios.get("/api/search", {
//       params: { title: query },
//     });
//     setResults(response.data);
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search for a product"
//         value={query}
//         onChange={(event) => setQuery(event.target.value)}
//       />
//       <button type="submit">Search</button>

//       {results.length > 0 && (
//         <ul>
//           {results.map((result) => (
//             <li key={result.id}>
//               <h3>{result.title}</h3>
//               <p>{result.description}</p>
//               <p>${result.price}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </form>
//   );
// }
