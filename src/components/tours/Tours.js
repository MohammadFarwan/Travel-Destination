import data from './../../data/db.json';
import './Tours.css';
function Tours() {
  console.log(data);
  return (
    <>
      {data.map(city => (
        <div key={city.id} className="tour-container">
          <h3 className="tour-name">{city.name}</h3>
          <img src={city.image} alt={city.name} className="tour-image" />
          <div className="tour-separator"></div>
        </div>
      ))}
    </>
  );
}

export default Tours;