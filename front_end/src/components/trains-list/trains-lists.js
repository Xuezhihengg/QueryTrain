
import classes from './trains-lists.module.css';
import TrainsDirectList from './trains-direct/trains-direct-list';
import TrainsChangeList from './trains-change/trains-change-list';

export default function TrainsLists() {
	return (
		<div className={classes.lists}>
			<TrainsDirectList />
			<TrainsChangeList />
		</div>
	);
}
