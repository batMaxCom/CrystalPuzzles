import styles from './CreateGroup.module.scss';
import { Page, Button } from '@shared/ui';
import { useState } from 'react';
import GroupName from './groupName/GroupName';
import Search from './search/Search';
import Student from './student/Student';
import { Group } from '@shared/api';
import { useSelector } from 'react-redux';
import { selectProfile } from '@app/providers/store/profile';
import { useNavigate } from 'react-router-dom';

interface CreateGroupPageProps {
	title: string;
}

export default function CreateGroupPage({ title }: CreateGroupPageProps) {
	const user = useSelector(selectProfile);
	const [group, setGroup]: any = useState({ name: '', trainer_id: user.id });
	const [students, setStudents]: any = useState([]);
	const navigate = useNavigate();

	function handleSubmit() {
		createGroup();
	}

	async function createGroup() {
		const [, err] = await Group.create(group);
		if (err) return;
		navigate('/groups', { replace: true });
	}

	return (
		<Page title={title}>
			<div className={styles.container} data-form>
				<GroupName
					setName={(value: string) => setGroup({ ...group, name: value })}
				/>
				{/* <Search /> */}
				{students &&
					students.map((item: any) => (
						<Student
							key={item.id}
							data={item}
							setStudents={setStudents}
							checked
						/>
					))}
				<Button title="Создать" className={styles.btn} onClick={handleSubmit} />
			</div>
		</Page>
	);
}
