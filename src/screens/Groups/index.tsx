import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([])
  
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
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?'/>
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}/>

    </Container>
  )
}