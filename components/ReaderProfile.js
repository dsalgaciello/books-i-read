export default function ReaderProfile({reader}) {
  return (
      <div className={"row customer"}>
          <div className={"col-8 col-sm-8 customer-image"}>
              <a href={reader.link}><img alt={reader.name} src={reader.image}/></a>
          </div>
          <div className={"col-4 col-sm-4"}>
              <a href={reader.link}>{reader.name}</a><br/>
              {reader.age}
          </div>
      </div>
  )
}
