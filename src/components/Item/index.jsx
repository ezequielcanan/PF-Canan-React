const Item = ({title, description}) => {
  return (
    <div className="card">
      <img src="" className="card-image-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-buy"></button>
      </div>
    </div>
  )
}