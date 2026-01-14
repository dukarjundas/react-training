import { useEffect, useState } from "react";
interface Post {
    id: number
    title: string
    completed: boolean
}

function Fetch_data() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                if (!response) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>API Data</h1>
            {data &&
                <div>
                    <ol>
                        {
                            data.map((item) => <li key={item.id}>{item.title} {"--------"}{item.completed ? "Completed" : "Not completed"}</li>)
                        }
                    </ol>
                </div>
            }
        </div>
    );
}

export default Fetch_data;
