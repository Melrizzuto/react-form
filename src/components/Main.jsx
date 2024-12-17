import Card from "./Card";
import posts from "../data/posts";

function Main() {
    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {posts
                .filter(post => post.published)
                .map((post) => (
                    <Card
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                        published={post.published}
                    />
                ))
            }
        </main>

    );
}

export default Main;