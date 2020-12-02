import * as React from 'react';
import { TextInput } from 'react-native';

export function SearchInput(props: any) {
  const [value, onChangeText] = React.useState('Buscar')

  return <TextInput
      style={{ 
          height: 40, 
          width: 300,
          borderColor: 'gray', 
          borderRadius: 3,
          backgroundColor: 'white',
          borderWidth: 1,
          position: 'absolute',
          marginTop: 24,
          zIndex: 1,
          top: 24,
          padding: 12,
        }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
}