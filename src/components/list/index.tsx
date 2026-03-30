import { useEffect, useState } from 'react';
import { View } from 'react-native';
import RestaurantItem from './item';

export interface RestaurantsProps {
    id: string
    name: string
    image: string
}

export default function RestaurantVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.3.98:3000/restaurants")
            const data = await response.json()
            setRestaurants(data)
        }

        getFoods()
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full gap-4 mb-10'>
            {restaurants.map(item => (
                <RestaurantItem item={item} key={item.id}/>
            ))}
        </View>
    );
}