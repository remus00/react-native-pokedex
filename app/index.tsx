import { getPokemonList } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['pokemon-list'],
        queryFn: () => getPokemonList(1),
    });

    return (
        <SafeAreaView>
            <Text>{JSON.stringify(data)}</Text>
        </SafeAreaView>
    );
}
