import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="card-group py-4">
			<Card
				properties="card border me-4"
				image="https://via.placeholder.com/500x325"
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
				url="#"
			/>
			<Card
				properties="card border me-4"
				image="https://via.placeholder.com/500x325"
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
				url="#"
			/>
			<Card
				properties="card border me-4"
				image="https://via.placeholder.com/500x325"
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
				url="#"
			/>
			<Card
				properties="card border"
				image="https://via.placeholder.com/500x325"
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
				url="#"
			/>
		</div>
	);
};

export default Cards;
