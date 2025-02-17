import Constants from 'expo-constants';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { Linking, Text, View } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import SettingButton from './components/SettingButton';

const SettingsScreen = () => {
	const { t, i18n } = useTranslation();
	const { colorScheme, setColorScheme } = useColorScheme();

	const handleThemeChange = () => {
		const themeOrder = ['light', 'dark', 'system'];
		const currentIndex = themeOrder.findIndex((theme) => theme === colorScheme);
		const nextTheme = themeOrder?.[currentIndex + 1] || themeOrder[0];
		setColorScheme(nextTheme);
	};

	const openLanguageSettings = () => {
		Linking.openSettings();
	};

	return (
		<Container
			isScrollable={false}
			header={<Header title={t('screen.settings.title')} />}>
			<View className='flex flex-1 gap-4 p-4'>
				<SettingButton
					title={t('screen.settings.theme.title')}
					description={t(`screen.settings.theme.${colorScheme}`)}
					icon={colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
					onPress={handleThemeChange}
				/>
				<SettingButton
					onPress={openLanguageSettings}
					title={t('screen.settings.language')}
					description={i18n.t(`language.${i18n.language}`)}
					icon='ChevronRight'
				/>
				<View className='flex-1 justify-end font-normal'>
					<View className='flex items-center gap-1'>
						<Text className='text-gray-400 text-sm'>
							{t('screen.settings.version')}
						</Text>
						<Text className='font-medium text-gray-600 text-sm'>
							{Constants.expoConfig.version}
						</Text>
					</View>
				</View>
			</View>
		</Container>
	);
};

export default SettingsScreen;
