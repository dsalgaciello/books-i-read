export default function Book({book}) {
  return (
      <div className={"row book"}>
              <div className={"col-3"}>
                  <img src={book.image} title={book.title} alt={book.title}/>
              </div>
              <div className={"col-9"}>
                  <h1>{book.title}</h1>
                  <p>
                      Times Read: {book.timesRead}
                  </p>
              </div>
      </div>
  )
}
