import React, { useState, useEffect } from 'react';
import './App.css';
import Maze from './components/maze';
import Footer from './components/footer';
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
    <View className="App flex flex-col h-screen justify-between">
      <h1 className="text-3xl font-bold underline">Maze me</h1>
      <div className="container">
        <Maze rows={20} cols={20} />
        <Button onClick={signOut}>Logout</Button>
      </div>
      <Footer />
    </View>
  );
}

export default withAuthenticator(App);