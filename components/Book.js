export default function Book({book}) {
  return (
      <div className={"row book"}>
          <div className={"col-sm-12 col-xs-12"}>
              <div className={"col-sm-5 col-xs-12"}>
                  <img src={book.image} title={book.title} alt={book.title}/>
              </div>
              <div className={"col-sm-7 col-xs-12"}>
                  <h1>{book.title}</h1>
                  <p>
                      Times Read: {book.timesRead}
                  </p>
              </div>
          </div>
      </div>
  )
}
