import QueryForm from '@/components/query-form/query-form';
import TrainsLists from '@/components/trains-list/trains-lists';

export default function HomePage() {  
	return (
		<div id="home">
      <QueryForm />
      <TrainsLists />
		</div>
	);
}
