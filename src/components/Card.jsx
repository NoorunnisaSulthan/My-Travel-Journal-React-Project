/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Card({ item }) {
    console.log(item);
    return (
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={`${item.imageUrl}`} alt="location pic" />
        </div>
        <div className="card-des">
          <p className="card-country">📍{item.location}</p>
          <p className="card-location">{item.title}</p>
          <p className="card-loc-des">{item.description}</p>
          <p className="card-date">When: <span className="card-actual-date">{item.startDate}{!item.endDate=="" && " ~ "+ item.endDate}</span> </p>
        </div>
      </div>
    );
  }
  