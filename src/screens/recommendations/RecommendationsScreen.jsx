import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { getFoodRecommendations } from '../../services/storage';
import RecommendationsNotFound from './components/RecommendationsNotFound';
import RecommendationCard from './components/RecommendationCard';
import Search from './components/Search';
import { searchInData } from '../../utils/data';

const RecommendationsScreen = () => {
	const { t } = useTranslation();
	const recommendations = getFoodRecommendations();

	const [search, setSearch] = React.useState('');

	const renderItem = ({ item }) => {
		return <RecommendationCard food={item} />;
	};

	const recommendationsFiltered = React.useMemo(() => {
		if (!search || search.length < 2) {
			return recommendations;
		}
		return searchInData(recommendations, search, ['title']);
	}, [recommendations, search]);

	const keyExtractor = (item) => item.title;

	return (
		<Container
			isScrollable={false}
			header={<Header title={t('screen.recommendations.title')} />}>
			<FlatList
				ListHeaderComponent={<Search search={search} setSearch={setSearch} />}
				ListEmptyComponent={<RecommendationsNotFound />}
				data={recommendationsFiltered}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerClassName={classNames('mt-4', {
					'flex flex-1': recommendationsFiltered.length <= 0,
				})}
				showsVerticalScrollIndicator={false}
				ListHeaderComponentClassName='mb-4'
			/>
		</Container>
	);
};

export default RecommendationsScreen;
