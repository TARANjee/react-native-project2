import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCards />
        <ElevatedCard />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App