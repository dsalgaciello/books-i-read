export default function Search({reader}) {
  return (
      <div className={"row search"}>
          <input type={"text"} name={"search"}/>
          <input type={"submit"} value={"Submit"}/>
      </div>
  )
}
