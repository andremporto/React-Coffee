import { Header } from "./components/header.jsx";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";

import "./global.css";

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="André Porto"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ipsa a? Eaque, eveniet quos maxime molestias fugiat esse minus dicta temporibus, mollitia reprehenderit veritatis explicabo! Qui vero in beatae!"
					/>
					<Post author="Gabriel Josias" content="Um novo post muito legal" />
				</main>
			</div>
		</div>
	);
}
