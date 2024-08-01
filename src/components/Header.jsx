import Login from "./Login";

export default function Header() {
	return (
		<header className="primary-header">
			<a className="header-logo" href="#">
				React app test
			</a>
			<Login />
		</header>
	);
}
