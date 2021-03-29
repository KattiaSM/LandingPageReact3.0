import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className={props.properties}>
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.description}</p>
			</div>
			<div className="container-fluid p-3 bg-light text-center">
				<a href={props.url} className="btn btn-primary ">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	properties: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string
};

export default Card;
