import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

import { Container } from './styles'

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

      <Button title='Criar nova turma'/>    
    </Container>
  )
}