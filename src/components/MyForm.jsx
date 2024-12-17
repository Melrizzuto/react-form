import { useState } from "react";

const MyForm = () => {
    const [post, setPost] = useState({
        title: ""
    });

    const handleInput = (e) => {
        const newPost = { ...post };
        newPost[e.target.name] = e.target.value;
        setPost(newPost);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-lg bg-light m-auto mb-4">
            <h3 className="mb-4 text-center text-secondary">Aggiungi un nuovo post</h3>

            <div className="mb-3">
                <label htmlFor="post" className="form-label fw-bold">
                    Titolo del tuo nuovo post
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={post.title}
                    onChange={handleInput}
                    placeholder="Inserisci il titolo del nuovo post"
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    Invia
                </button>
            </div>
        </form>
    );
};

export default MyForm;