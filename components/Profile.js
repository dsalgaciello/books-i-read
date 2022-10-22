import AddBook from "@components/AddBook";
import Collapsible from "@components/Collapse";

export default function Profile({reader}) {
    const addBootItem =  <AddBook user={"cesco"}/>

    return (
      <>
          <div className={"col-12 profile"}>
              <div className={"col-4 col-sm-4"}>
                      <div className={"profile-image"}>
                          <img src={reader.image} title={reader.name} alt={reader.name}/>
                      </div>
                  </div>
              <div className={"col-8 col-sm-8"}>
                      <h4>{reader.name}</h4>
                      <h5>
                          {reader.dob}
                      </h5>
                      <div className={"row"}>
                      <div className={"col-12"}>
                          <div className={"col-8"}>
                              <strong>Total Books Read:</strong>
                          </div>
                          <div className={"col-4"}>
                              {reader.totalBooksRead}
                          </div>
                      </div>
                      <div className={"col-12"}>
                          <div className={"col-8"}>
                              <strong> Unique Books Read:</strong>
                          </div>
                          <div className={"col-4"}>
                              {reader.totalUniqueBooksRead}
                          </div>
                      </div>
                      <div className={"col-12"}>
                          <div className={"col-8"}>
                              <strong>In English Books:</strong>
                          </div>
                          <div className={"col-4"}>
                              {reader.totalEnglishBooksRead}
                          </div>
                      </div>
                      <div className={"col-12"}>
                          <div className={"col-8"}>
                              <strong>In Spanish Books:</strong>
                          </div>
                          <div className={"col-4"}>
                              {reader.totalSpanishBooksRead}
                          </div>
                      </div>
                      </div>
                  </div>
          </div>
          <Collapsible title="Add Book" content={addBootItem} />
      </>
    )
}
