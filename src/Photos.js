import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    let results = props.photos.filter((photo) => {
      return photo.width / photo.height.toFixed(1) === 1.5;
    });
    results.length = 9;

    return (
      <section className="Photos">
        <div className="row">
          {results.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                {
                  <a href={photo.urls.full} target="_blank" rel="noreferrer">
                    <img
                      src={photo.urls.small_s3}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                }
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
