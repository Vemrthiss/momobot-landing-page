import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import * as Pic from "./Assets.jsx"

const Carousel = (props) => {
    return (
    <div id="teamCarousel" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
            <button
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            ></button>
            <button
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
            ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
            <Pic.GroupPic1
            className="block w-full"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div class="carousel-item relative float-left w-full">
            <Pic.GroupPic2
            className="block w-full"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item relative float-left w-full">
            <Pic.GroupPic3
            className="block w-full"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
            <div class="carousel-item relative float-left w-full">
            <Pic.GroupPic4
            className="block w-full"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Forth slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
            <div class="carousel-item relative float-left w-full">
            <Pic.GroupPic5
            className="block w-full"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Fifth slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Carousel