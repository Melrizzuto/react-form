import { useState } from "react";

const MyForm = ({ onAddPost, posts }) => {
    const [title, setTitle] = useState("");

    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            const newPost = {
                id: posts.length + 1,
                title: title,
                content: "",
                image: "",
                tags: [],
                published: true,
            };
            onAddPost(newPost);
            setTitle("");
        }
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
                    value={title}
                    onChange={handleInput}
                    placeholder="Inserisci il titolo del nuovo post"
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    Aggiungi
                </button>
            </div>
        </form>
    );
};

export default MyForm;