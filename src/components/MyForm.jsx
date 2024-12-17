function MyForm() {
    return (
        <form className="mx-4">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Indirizzo email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Non condivideremo la tua email con nessuno.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Ricordami</label>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    )
};

export default MyForm;