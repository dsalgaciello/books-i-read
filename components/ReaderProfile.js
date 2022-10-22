export default function ReaderProfile({reader}) {
  return (
      <div className={"row customer"}>
          <div className={"col-5 col-sm-5 customer-image"}>
              <a href={reader.link}><img alt={reader.name} src={reader.image}/></a>
          </div>
          <div className={"col-7 col-sm-7"}>
              <a href={reader.link}>{reader.name}</a><br/>
              {reader.age}
          </div>
      </div>
  )
}
