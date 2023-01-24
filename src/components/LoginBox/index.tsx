import { GithubLogo } from "phosphor-react";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function LoginBox() {
	const { signInUrl } = useContext(AuthContext);

	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href={signInUrl} className={styles.signInWithGithub}>
				<GithubLogo size={24} />
				Entrar com Github
			</a>
		</div>
	);
}
