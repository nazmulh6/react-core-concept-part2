import { use } from "react"

export default function Posts({fetchPosts}){

    const posts = use(fetchPosts);
    console.log(posts)
    return (
        <div className="card">
            <h1>Posts: {posts.length} </h1>
        </div>
    )
}