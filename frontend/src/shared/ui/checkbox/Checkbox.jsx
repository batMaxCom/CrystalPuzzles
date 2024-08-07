import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as CheckedIcon } from '@shared/assets/svg/checked.svg';
import styles from './Checkbox.module.scss';

export default function Checkbox({
	defaultChecked,
	disabled = false,
	id = uuidv4()
}) {
	console.log("checkbox", disabled);
	return (
		<label className={styles.label} htmlFor={id}>
			<input
				id={id}
				type="checkbox"
				className={styles.checkbox}
				defaultChecked={defaultChecked}
				disabled={disabled}
			/>
			<CheckedIcon className={styles.icon} />
		</label>
	);
}
