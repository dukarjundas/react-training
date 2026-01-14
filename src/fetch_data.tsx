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
                // console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((result) => {
                // console.log(result);
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
            <table cellPadding="8">
                <thead>
                    <tr>
                        <th>sl/no</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Completed" : "Not completed"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Fetch_data;
