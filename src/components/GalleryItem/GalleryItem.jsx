import {useState} from 'react';
import { IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import { Badge } from '@mui/material';
import { Favorite, FavoriteBorder, Delete } from '@mui/icons-material';

function GalleryItem ({image, putLikes, deleteImage}) {
    let srcText = image.path;
    let imgDesc = image.description;

    const [imgClicked, setImgClick] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);

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

            <Badge color="info" badgeContent={image.likes} >
                 <Fab aria-label="favorite" className="button" onClick={(event) => {putLikes(image)}}> <Favorite/></Fab>
            </Badge>


            <IconButton aria-label="delete" className="button" onClick={(event) => {deleteImage(image)}}> <Delete /> </IconButton>

        </div>
        </>
    )
}

export default GalleryItem;