export default function Profile({reader}) {
  return (
      <div className={"row"}>
          <div className={"col-5 col-sm-5 profile"}>
              <div className={"profile-image"}>
                  <img src={reader.image} title={reader.name} alt={reader.name}/>
              </div>
          </div>
          <div className={"col-7 col-sm-7"}>
              <h3>{reader.name}</h3>
              <h4>
                  {reader.dob}
              </h4>
              <h4>
                  Total Books Read: {reader.totalBooksRead}
              </h4>
              <h4>
                  Total Unique Books Read: {reader.totalUniqueBooksRead}
              </h4>
              <h4>
                  Total English Books: {reader.totalEnglishBooksRead}
              </h4>
              <h4>
                  Total Spanish Books: {reader.totalSpanishBooksRead}
              </h4>
          </div>
      </div>
  )
}
