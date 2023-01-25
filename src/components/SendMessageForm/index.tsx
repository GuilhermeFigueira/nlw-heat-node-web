import { GitlabLogoSimple, SignOut } from "phosphor-react";
import styles from "./styles.module.scss";
import { AuthContext } from "../../contexts/auth";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";

export function SendMessageForm() {
	const { user, signOut } = useContext(AuthContext);

	const [message, setMessage] = useState("");

	async function handleSendMessage(event: FormEvent) {
		event.preventDefault();

		if (!message.trim()) {
			return;
		}

		await api.post("messages", { message });

		setMessage("");
	}

	return (
		<div className={styles.sendMessageFormWrapper}>
			<button onClick={signOut} className={styles.signOutButton}>
				<SignOut size={32} />
			</button>

			<header className={styles.userInformation}>
				<div className={styles.userImage}>
					<img src={user?.avatar_url} alt={user?.name} />
				</div>
				<strong className={styles.userName}>{user?.name}</strong>
				<span className={styles.userGithub}>
					<GitlabLogoSimple size={16} />
					{user?.login}
				</span>
			</header>

			<form
				onSubmit={handleSendMessage}
				className={styles.sendMessageForm}
			>
				<label htmlFor="message">Mensagem</label>

				<textarea
					onChange={(event) => setMessage(event.target.value)}
					value={message}
					name="message"
					id="message"
					placeholder="Qual a sua expectativa para o evento?"
				/>
				<button type="submit"> Enviar Mensagem</button>
			</form>
		</div>
	);
}
