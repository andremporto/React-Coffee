import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/andremporto.png" />
					<div className={styles.authorInfo}>
						<strong>André Porto</strong>
						<span>Software Engineer</span>
					</div>
				</div>

				<time title="20 de Março às 17:20" dateTime="2023-03-19 10:25:30">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>E aí seus feio 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portfólio. É esse projeto aqui que você tá vendo.
					Um formulário de comentários todo estiloso. Fiz ele utilizando HTML, CSS e principalmente
					React ⚛️.
				</p>
				<p>Clica no link abaixo e vai conferir. Não custa nada vai... 😬</p>
				<p>
					<a href="">https://github.com/andremporto</a>
				</p>
				<p>
					<a href="">#novoprojeto</a> <a href="">#react</a> <a href="">#javascript</a>{" "}
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
