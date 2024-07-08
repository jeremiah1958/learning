const Book = ({title, author, cover}) =>{
    return(
        <section>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
            <p>By {author}</p>
            <br />
        </section>
        
    )
}

export default Book