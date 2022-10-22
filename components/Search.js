export default function Search({reader}) {
  return (
      <div className={"row search"}>
          <h1 className={"title"}>Search Books</h1>
          <div className={"col-9"}>
              <input type={"text"} name={"search"} placeholder={"Search Books"}/>
          </div>
          <div className={"col-3"}>
              <input type={"submit"} value={"Submit"}/>
          </div>
      </div>
  )
}
