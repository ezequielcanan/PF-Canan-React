const ItemListContainer = (props) => { //aca no hago desestructuracion para mostrar un ejemplo de como seria sin ella
	return (
		<main className="container-fluid main">
			<section className="section-one row">
				<article className="col-md-12">
					<p>{props.text}</p>
				</article>
			</section>
		</main>
	)
}

export default ItemListContainer