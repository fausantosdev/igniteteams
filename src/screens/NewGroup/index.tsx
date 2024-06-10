import { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  async function handleNew() {

  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='Crie a turma para adicionar as pessoas'/>

        <Input
          placeholder='Nome da turma'
          value={group}
          onChangeText={setGroup}/>
        <Button
          style={{ marginTop: 20 }}
          title='Criar'
          onPress={handleNew}/>
      </Content>
    </Container>
  );
}