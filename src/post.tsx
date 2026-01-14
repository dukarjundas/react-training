import { useEffect, useState } from 'react';
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

function Post() {
    const [items, setItem] = useState<Post[]>([]);
    const [searchVal, setSearchVal] = useState("")

    async function getPosts(abort: AbortController, search: string) {
        const data: Post[] = await fetch("https://jsonplaceholder.typicode.com/posts",
            { signal: abort.signal }).then(res => res.json());
        setItem(data.filter(
            (item) => (
                item.title.toLowerCase().includes(search.toLowerCase())
            )
        ));
    }
    // useEffect(() => {
    //     getPosts()
    // }, []);

    useEffect(() => {
        const abort = new AbortController();
        const timer = setTimeout(() => {
            getPosts(abort, searchVal);
        },300);

        return () => {
            clearTimeout(timer);
            abort.abort("component unmounted")
        }

    }, [searchVal]);


    return (
        <div>
            <h1>Posts</h1>
            <input type="text" placeholder="Search.." value={searchVal} onChange={(event) => setSearchVal(event.target.value)} />
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}
export default Post;
