import { Link } from "react-router-dom";

const Item = ({ title, description, id, image }) => {
  return (
    <div className="card col-md-3">
      <img src={image} className="card-image-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link className="btn btn-primary" to={`/item/${id}`}>
          View more
        </Link>
      </div>
    </div>
  );
};

export default Item;
