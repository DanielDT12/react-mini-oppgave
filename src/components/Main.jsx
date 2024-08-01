import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Main() {
	return (
		<main className="main">
			<article className="article">
				<h1 className="article__title">Article Title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente
					hic incidunt, fuga corrupti nesciunt non illum rerum reprehenderit?
					Iusto, libero! Dolorum sint quis placeat commodi accusantium
					voluptatum ipsam officia excepturi ipsa nobis. Nihil at et sint quis
					ut dolor.
				</p>
			</article>
			<DatePicker />
		</main>
	);
}
