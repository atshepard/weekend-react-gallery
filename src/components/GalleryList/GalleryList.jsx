import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList, putLikes, deleteImage}) {

    return(
        <>
            <div className="itemContainer">
                {galleryList.map(image => 
                     <GalleryItem 
                     key={image.id}
                     image={image}
                     putLikes={putLikes}
                     deleteImage={deleteImage}
                     />
                    )}
            </div>        
        </>
    )
}

export default GalleryList;
