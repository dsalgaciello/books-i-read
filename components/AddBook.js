export default function AddBook({reader}) {
  return (
      <div className={"row add-book"}>
          <div className="col-12">
              <p>
                  <label htmlFor="title">Title</label><br/>
                  <input type="text" name="title" placeholder="Book Title" />
              </p>
              <p>
                  <label htmlFor="author">Author</label><br/>
                  <input type="text" name="author" placeholder="Book Author"/>
              </p>
              <p>
                  <label htmlFor="image">Image</label><br/>
                  <input type="file" name="image" />
              </p>
              <p>
                  <input type="button" value="Save Book"/>
              </p>
          </div>
      </div>
  )
}
