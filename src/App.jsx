import React from 'react'
import './App.css'
import BasicTextFields from './components/SearchBar'
import StandardImageList from './components/ImageGallery'


function App () {
  return (
    <div>
      <h2>Howdy</h2>
      <BasicTextFields/>
      <StandardImageList />
    </div>
  );
}
export default App;