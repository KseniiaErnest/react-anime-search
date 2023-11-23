export default function Search( {query, setQuery} ) {
   return (
    <input className="nav-search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} ></input>
   )
}