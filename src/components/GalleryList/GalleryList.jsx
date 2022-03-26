import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList, putLikes}) {

    return(
        <>
            <div className="itemContainer">
                {galleryList.map(image => 
                     <GalleryItem 
                     key={image.id}
                     image={image}
                     putLikes={putLikes}
                     />
                    )}
            </div>        
        </>
    )
}

export default GalleryList;
