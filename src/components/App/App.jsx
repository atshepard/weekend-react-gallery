import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import './App.css';

function App() {

  useEffect(() => {
    getGallery();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGalleryList(response.data);
      })
      .catch(err => {
        console.log('Error in get on App side: ', err);
      })

  }

  const putLikes = (image) => {
    axios.put(`/gallery/like/${image.id}`)
      .then(response => {
        //retrieves updated item list:
        getGallery();
        console.log('Updated', image)
      }).catch(err => {
        console.log('Error in update', err);
      })

  }

  return (
    <div className="App">
      <Header />
      <p>Gallery goes here:</p>

      <GalleryList
        galleryList={galleryList}
        putLikes = {putLikes} />
    </div>
  );
}

export default App;
