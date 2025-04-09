import React from 'react';
import'../styles/gallery.css'
import Navbar from '../components/Header';
import Underline from '../components/Underline';

function Gallery() {
  return (
    <>
    <Underline/>
    <h1>Gallery</h1>
    <div>
      
    <div className="album d-flex justify-content-center" >
      <div className="responsive-container-block bg">
        <div className="responsive-container-block img-cont">
          <img
            className="img"
            src="gallery/gallery (1).jpeg"
            alt="Gallery item 1"
          />
          <img
            className="img"
            src="gallery/gallery (2).jpeg"
            alt="Gallery item 2"
          />
          <img
            className="img img-last"
            src="gallery/gallery (3).jpeg"
            alt="Gallery item 3"
          />
        </div>

        <div className="responsive-container-block img-cont">
          <img
            className="img img-big"
            src="gallery/gallery (4).jpeg"
            alt="Gallery item 4"
          />
          <img
            className="img img-big img-last"
            src="gallery/gallery (5).jpeg"
            alt="Gallery item 5"
          />
        </div>

        <div className="responsive-container-block img-cont">
          <img
            className="img"
            src="gallery/gallery (6).jpeg"
            alt="Gallery item 6"
          />
          <img
            className="img"
            src="gallery/gallery (7).jpeg"
            alt="Gallery item 7"
          />
          <img
            className="img"
            src="gallery/gallery (8).jpeg"
            alt="Gallery item 8"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Gallery;
