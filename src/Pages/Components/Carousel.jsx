import React from "react";
import img1 from '../../assets/board.jpg'
import img2 from '../../assets//check.jpg'
import img3 from '../../assets/chess.jpg'
import img4 from '../../assets/dice (1).jpg'
import img5 from '../../assets/puzzle.jpg'

const Carousel = () => {
  return (
    <div className="carousel relative w-full h-[900px]">
      <div id="slide1" className="relative carousel-item w-full">
        <img
          src={img3}
          className="w-full h-full"
        />
         <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-6xl font-bold mb-5'>Conquer the board</h2>
           <p className="text-center">with the perfect blend of strategy, luck, and laughter</p>
          </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full"
        />
         <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-6xl font-bold mb-5'>Conquer the board</h2>
           <p className="text-center">the perfect blend of strategy, luck, and laughter</p>
          </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full"
        />
         <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-6xl font-bold mb-5'>Conquer the board</h2>
           <p className="text-center">the perfect blend of strategy, luck, and laughter</p>
          </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full"
        />
         <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-6xl font-bold mb-5'>Conquer the board</h2>
           <p className="text-center">the perfect blend of strategy, luck, and laughter</p>
          </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full"
        />
         <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-6xl font-bold mb-5'>Conquer the board</h2>
           <p className="text-center">the perfect blend of strategy, luck, and laughter</p>
          </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-ghost bg-yellow-850 hover:bg-yellow-950">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
