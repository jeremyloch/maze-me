import React, { useState, useEffect } from 'react';
import './App.css';
import Maze from './components/maze';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

const initialFormState = { name: '', description: '' }

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Maze rows={10} cols={10} />
      </Card>
      <Button onClick={signOut}>Logout</Button>
    </View>
  );
}

export default withAuthenticator(App);