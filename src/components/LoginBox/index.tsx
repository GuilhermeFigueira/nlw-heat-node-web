import { GithubLogo } from "phosphor-react";
import styles from "./styles.module.scss";

export default function LoginBox() {
	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href="" className={styles.signInWithGithub}>
				<GithubLogo size={24} />
				Entrar com Github
			</a>
		</div>
	);
}
