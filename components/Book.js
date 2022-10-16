export default function Book({book}) {
  return (
      <div className={"row book"}>
          <div className={"col-5 col-sm-5"}>
              <img src={book.image} />
          </div>
          <div className={"col-5 col-sm-7"}>
              <h1>{book.title}</h1>
          </div>
      </div>
  )
}
