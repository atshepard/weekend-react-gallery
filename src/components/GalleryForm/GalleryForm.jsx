import {useState} from 'react';
import axios from 'axios';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import swal from 'sweetalert';

function GalleryForm ({getGallery}) {

    const [newImageLink, setNewImageLink] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    //function to add new item on click of add item
    const handleSubmit = (event) => {
        // Prevent constant page refresh
        event.preventDefault();

        swal('The add image functionality has been disabled to preserve the app in its current state!');

        // axios.post('/gallery', { path: newImageLink, description: newImageDescription, likes: 0})
        //     .then((response) => {
        //         console.log('form post response', response);
        //         // Re-render the list with all items
        //         getGallery();
        //         // Reset input fields for new use
        //         setNewImageLink('');
        //         setNewImageDescription('');
        //     }).catch((err) => {
        //         console.log('Error in form post', err);
        //     })
        }

    return (
        <>
           <div className="form" >
                <form align="center" onSubmit={handleSubmit}>
                    <h4 id="formHead">Add an Image:</h4>
                    <Input id="link" variant="filled" color="info" className="form" type="text" placeholder="Image Link"
                        onChange={(event) => setNewImageLink(event.target.value)}
                        value={newImageLink} />

                    <Input id="desc" variant="filled" color="info" className="form"  type="text" placeholder="Image Description"
                        onChange={(event) => setNewImageDescription(event.target.value)}
                        value={newImageDescription} />

                    <Button color="info" variant="contained" className="form" type="submit">Add Image</Button>
                </form>
            </div>
        </>
    )
}

export default GalleryForm;