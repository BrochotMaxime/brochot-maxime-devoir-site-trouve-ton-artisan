export default function submitSearch(event, searchTerm, navigate, setSearchTerm) {
        event.preventDefault();

        const trimmedSearch = searchTerm.trim();

        if (!trimmedSearch) {
                return;
        }

        navigate(`/recherche?name=${encodeURIComponent(trimmedSearch)}`);
        setSearchTerm('');
}