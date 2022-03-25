import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {

    return(
        <>
            <div className="itemContainer">
                {galleryList.map(image => 
                     <GalleryItem 
                     key={image.id}
                     image={image}
                     />
                    )}
            </div>        
        </>
    )
}

export default GalleryList;
