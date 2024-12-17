import style from './Card.module.css';

function Card({ title, image, content, tags, published, onDelete, id }) {

    // imgs di default se non c'è
    const defaultImage = 'https://placehold.co/600x400';
    const imgSrc = image || defaultImage;

    // assegno i colori dei tag
    const tagColors = {
        trip: 'info',
        landscape: 'primary',
        lowcost: 'success',
        expansive: 'danger',
    };
    // utilizzo l'operatore ternario per la condizione di published
    return published ? (
        <div className={`card m-1 ${style.card}`}>
            <img src={imgSrc} className={`card-img-top ${style.cardImg}`} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span key={index} className={`badge bg-${tagColors[tag] || 'secondary'} me-2 mb-2`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    onClick={() => onDelete(id)}
                    className="btn btn-danger btn-sm mt-2"
                >
                    Elimina
                </button>
            </div>
        </div>
    ) : null;
}

export default Card;