import { Header } from "./components/header.jsx";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";

import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://i.postimg.cc/LsdNNjcx/sarah2.png",
			name: "Sarah Andrade",
			role: "Attorney at Law",
		},
		content: [
			{ type: "paragraph", content: "E aí galera 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É esse projeto aqui que você tá vendo. Um formulário de comentários todo estiloso. Fiz ele utilizando HTML, CSS e React ⚛️.",
			},
			{
				type: "paragraph",
				content: "Clica no link abaixo e vai conferir. Não custa nada vai... 😬",
			},
			{ type: "link", content: "https://github.com/andremporto" },
		],
		publishedAt: new Date("2023-03-30 16:20:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl:
				"https://scontent.faju17-1.fna.fbcdn.net/v/t1.18169-9/13241259_1009723075748226_6033532080273608373_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZH-gCvT2jpwAX985Qqb&_nc_ht=scontent.faju17-1.fna&oh=00_AfDH1ZeJLF2-hx2WJje8_TuGgfpiFdEVTC4d81_BoX6KWg&oe=6440DEDA",
			name: "Vini Góis",
			role: "CEO at Play Productions",
		},
		content: [
			{ type: "paragraph", content: "E aí galera 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É esse projeto aqui que você tá vendo. Um formulário de comentários todo estiloso. Fiz ele utilizando HTML, CSS e React ⚛️.",
			},
			{
				type: "paragraph",
				content: "Clica no link abaixo e vai conferir. Não custa nada vai... 😬",
			},
			{ type: "link", content: "https://github.com/andremporto" },
		],
		publishedAt: new Date("2023-03-21 07:10:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
