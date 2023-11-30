import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([
    'Rocketseat Team',
    'Dev team'
  ])
  
  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      <FlatList
        style={{ width: '100%' }} 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => {}}/>
        )}/>

    </Container>
  )
}