import { useState } from "react";
import Card from "./Card";
import MyForm from "./MyForm";
import postsData from "../data/posts";

function Main() {
    const [posts, setPosts] = useState(postsData);

    // fn per aggiungere un post
    const handleAddPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    //fn per eliminare un post tramite id
    const handleDeletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };



    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {posts
                .filter(post => post.published)
                .map((post) => (
                    <Card
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                        published={post.published}
                        onDelete={handleDeletePost}
                    />
                ))
            }

            <MyForm
                onAddPost={handleAddPost}
                posts={posts} />
        </main>
    );
}

export default Main;