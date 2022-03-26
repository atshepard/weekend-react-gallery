import {useState} from 'react';

function GalleryForm ({getGallery}) {

    const [newImageLink, setNewImageLink] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    //function to add new item on click of add item
    const handleSubmit = (event) => {
        // Prevent constant page refresh
        event.preventDefault();

        axios.post('/gallery', { path: newImageLink, description: newImageDescription, likes: 0})
            .then((response) => {
                console.log('form post response', response);
                // Re-render the list with all items
                getGallery();
                // Reset input fields for new use
                setNewImageLink('');
                setNewImageDescription('');
            }).catch((err) => {
                console.log('Error in form post', err);
            })


    return (
        <>
           <div align="left" className="form" >
                <h2>Add an Image:</h2>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="link"> Image Link: </label>
                    <input id="link" type="text" placeholder="Image Link"
                        onChange={(event) => setNewImageLink(event.target.value)}
                        value={newImageLink} />

                    <label htmlFor="desc"> Image Description: </label>
                    <input id="desc" type="number" placeholder="Image Description"
                        onChange={(event) => setNewImageDescription(event.target.value)}
                        value={newImageDescription} />

                    <button type="submit">Add Image</button>
                </form>
            </div>
        </>
    )
}

export default GalleryForm;