import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useCallback, useState } from "react";
import styles from "./textInput.module.css";

export const TextInput = ({ onClick }) => {
	const [msg, setMsg] = useState("");
	const onChange = useCallback((event) => {
		setMsg(event.target.value);
	}, []);
	const onEnterClick = (e) => {
		if (e.key === "Enter") {
			onClick(msg);
			setMsg("");
		}
	};

	return (
		<>
			<form className={styles.wrapForm} noValidate autoComplete="off">
				<TextField
					id="standard-text"
					label="메시지를 입력해주세요"
					className={styles.wrapText}
					value={msg}
					onChange={onChange}
					onKeyPress={onEnterClick}
					autoFocus
					//margin="normal"
				/>
				<Button
					variant="contained"
					className={styles.button}
					onClick={() => {
						onClick(msg);
						setMsg("");
					}}
				>
					전송
				</Button>
			</form>
		</>
	);
};
