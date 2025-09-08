import * as Icons from "lucide-react";

export default function SearchBar({ query, setQuery }) {
   return (
      <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
         <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-full max-w-sm">
            <Icons.Search className="h-4 w-4 text-white/70" />
            <input
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Search post"
               className="ml-2 flex-1 bg-transparent outline-none text-white placeholder-white/70"
            />
         </div>
      </div>
   );
}
