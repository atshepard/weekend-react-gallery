import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import './App.css';

function App() {

  //runs initial get on page load:
  useEffect(() => {
    getGallery();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  //gets all gallery items from database:
  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGalleryList(response.data);
      })
      .catch(err => {
        console.log('Error in get on App side: ', err);
      })

  }

  //updates likes for specific image
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

  //sends axios on delete route for specific image:
  const deleteImage = (image) => {
    console.log('Delete from App.jsx')

    swal('The delete button is currently disabled to preserve all my hard work!');

    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this image!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     swal("Poof! Gone forever!", {
    //       icon: "success",
    //     });
    //     axios.delete(`/gallery/${image.id}`)
    //     .then(response => {
    //         getGallery();
    //         console.log('successful delete: ', response);
    //     }).catch(err => {
    //         console.log('error in delete from App.jsx: ', err);
    //     });
    //   } else {
    //     swal  ("We'll hang on to this for now!");
    //   }
    // });
  }

  return (
    <div className="App">
      <Header />
      <br />

      <GalleryForm 
      getGallery={getGallery}
      />
      <br />

      <GalleryList
        deleteImage={deleteImage}
        galleryList={galleryList}
        putLikes = {putLikes} />
    </div>
  );
}

export default App;
