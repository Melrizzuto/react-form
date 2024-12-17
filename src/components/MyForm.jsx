import { useState } from "react";

const MyForm = ({ onAddPost, posts }) => {

    //gli stati del form
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [published, setPublished] = useState(true);

    //Fn per gestire il submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //nuovo post con i dati raccolti
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            image,
            tags: [],
            published,
        };

        //fn passata dal main
        onAddPost(newPost);

        // Resetta i campi del form
        setTitle("");
        setContent("");
        setImage("");
        setPublished(true);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-lg bg-light m-auto my-4">
            <h3 className="mb-4 text-center text-secondary">Aggiungi post</h3>

            {/* title */}
            <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold">
                    Titolo
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Inserisci il titolo del nuovo post"
                />
            </div>

            {/* content */}
            <div className="mb-3">
                <label htmlFor="content" className="form-label fw-bold">
                    Contenuto
                </label>
                <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Inserisci il contenuto del post"
                ></textarea>
            </div>

            {/* url img */}
            <div className="mb-3">
                <label htmlFor="image" className="form-label fw-bold">
                    Immagine (URL)
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Inserisci l'URL dell'immagine"
                />
            </div>

            {/* checkbox published */}
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                />
                <label htmlFor="published" className="form-check-label">
                    Pubblicalo
                </label>
            </div>

            {/* btn submit */}
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    Aggiungi
                </button>
            </div>
        </form>
    );
};

export default MyForm;