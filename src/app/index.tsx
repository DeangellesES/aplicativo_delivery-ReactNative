import { ScrollView, View } from "react-native";
import Banner from "../components/banner";
import { Header } from "../components/header";
import Search from "../components/search";
import Section from "../components/section";

import Constants from 'expo-constants';
import RestaurantVerticalList from "../components/list";
import { Restaurants } from "../components/restaurants";
import TrendingFoods from "../components/trending";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}>

      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
        <Section name="Comidas em alta"
          label="Veja mais"
          action={() => console.log("CLICOU NO VEJA MAIS")}
          size="text-2xl"
        />

        <TrendingFoods />

        <Section name="Famosos no DevFood"
          label="Veja todos"
          action={() => console.log("CLICOU NO FAMOSOS")}
          size="text-2xl"
        />

        <Restaurants/>

        <Section name="Restaurantes"
          label="Veja todos"
          action={() => console.log("CLICOU NO FAMOSOS")}
          size="text-2xl"
        />

        <RestaurantVerticalList/>

      </View>
    </ScrollView>
  );
}
