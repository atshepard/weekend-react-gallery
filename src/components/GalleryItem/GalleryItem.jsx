import {useState} from 'react';

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

            
            <button className="button" onClick={(event) => {putLikes(image)}}>Like this!</button>
            <p className="likeCount"> Likes: {image.likes} </p>

            <button className="button" onClick={(event) => {deleteImage(image)}}>Delete this!</button>

        </div>
        </>
    )
}

export default GalleryItem;