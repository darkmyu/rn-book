import React, {useState} from 'react';
import {Button} from 'react-native';
import Box from './Box';

function BoxButton() {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button title="Toggle" onPress={onPress} />
      {visible && <Box isRounded={true} size="large" color="blue" />}
    </>
  );
}

export default BoxButton;
