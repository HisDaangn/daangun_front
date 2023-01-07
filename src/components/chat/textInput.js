import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styles from "./textInput.module.css";

export const TextInput = () => {
	return (
		<>
			<form className={styles.wrapForm} noValidate autoComplete="off">
				<TextField
					id="standard-text"
					label="메시지를 입력해주세요"
					className={styles.wrapText}
					//margin="normal"
				/>
				<Button variant="contained" className={styles.button}>
					전송
				</Button>
			</form>
		</>
	);
};
