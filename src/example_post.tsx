import { useEffect, useState } from 'react';

/**
 * Type definition for a Post object
 * This helps TypeScript understand the shape of API data
 */
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function ExamplePost() {

    /**
     * items → stores the filtered list of posts
     * setItem → updates the items state
     */
    const [items, setItem] = useState<Post[]>([]);

    /**
     * searchVal → stores the value typed in the input box
     * setSearchVal → updates searchVal on every keystroke
     */
    const [searchVal, setSearchVal] = useState("");

    /**
     * getPosts()
     * 1. Fetches posts from API
     * 2. Filters posts based on search text
     * 3. Updates state with filtered data
     */
    async function getPosts(abort: AbortController, search: string) {
        console.log("Fetching posts...");

        const data: Post[] = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                // AbortController allows cancelling the request
                signal: abort.signal
            }
        ).then(res => res.json());

        console.log("Total posts fetched:", data.length);
        console.log("Search value:", search);

        /**
         * Filter posts based on search input
         * toLowerCase() → makes search case-insensitive
         */
        const filteredData = data.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );

        console.log("Filtered posts count:", filteredData.length);

        // Update state → triggers re-render
        setItem(filteredData);
    }

    /**
     * useEffect runs:
     * ✔ On first render
     * ✔ Every time searchVal changes
     */
    useEffect(() => {

        console.log("useEffect triggered");

        // Create AbortController instance
        const abort = new AbortController();

        // Call API with current search value
        getPosts(abort, searchVal);

        /**
         * Cleanup function
         * Runs when:
         * ✔ component unmounts
         * ✔ searchVal changes before previous request completes
         */
        return () => {
            console.log("Aborting previous fetch request");
            abort.abort("component unmounted");
        };

    }, [searchVal]); // Dependency → re-run when searchVal changes

    return (
        <div>
            <h1>Posts</h1>

            {/*
              Controlled input:
              value comes from state
              onChange updates state
            */}
            <input
                type="text"
                placeholder="Search.."
                value={searchVal}
                onChange={(event) => setSearchVal(event.target.value)}
            />

            {/*
              Render filtered posts
            */}
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}

export default ExamplePost;
