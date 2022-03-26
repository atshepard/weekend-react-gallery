import {useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import { Favorite, FavoriteBorder, Delete } from '@mui/icons-material';

function GalleryItem ({image, putLikes, deleteImage}) {
    let srcText = image.path;
    let imgDesc = image.description;

    const [imgClicked, setImgClick] = useState(false);

    const handleClick = () => {
        setImgClick(!imgClicked);
        // console.log(imgClicked);
    }

    return(
        <>
        <div className="imageContainer">
            {
            imgClicked ? 
            // if imgClicked is true, render the description:
            <div onClick={handleClick} >
                <p className="description"> {imgDesc} </p>
            </div>
            :
            // if imgClicked is false, render the image:
            <div onClick={handleClick}>
                <img className="image" src={srcText} />  
            </div>
            }

            
            <Button variant="outlined" className="button" onClick={(event) => {putLikes(image)}}>Like this!</Button>
            <p className="likeCount"> Likes: {image.likes} </p>

            <IconButton aria-label="delete" className="button" onClick={(event) => {deleteImage(image)}}> <Delete /> </IconButton>

        </div>
        </>
    )
}

export default GalleryItem;