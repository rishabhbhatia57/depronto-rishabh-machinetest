import React from "react";
import './ImageCarousel.css'
export default function ImageCarousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 carimg" src="https://picsum.photos/1920/1080" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First Image</h5>
                        <p>Here you can see the first image</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carimg" src="https://picsum.photos/1920/1080" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second Image</h5>
                        <p>Here's the second</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carimg" src="https://picsum.photos/1920/1080" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third Image</h5>
                        <p>And finally the third</p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
            );

}