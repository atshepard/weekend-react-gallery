import {useState} from 'react';

function GalleryItem ({image}) {
    let srcText = image.path;

    const [imgClicked, setImgClick] = useState(false);

    return(
        <>
            <div>
                <img className="image" src={srcText} />  
            </div>
        </>
    )
}

export default GalleryItem;