import React, { useState } from "react";
import "./Gallery.css";
import { FaRegWindowClose } from "react-icons/fa";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  let data = [
    {
      id: 1,
      img: "https://i.ibb.co/rM4TDPw/board.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co/7YFDChN/check.jpg",
    },
    {
      id: 3,
      img: "https://i.ibb.co/WWp8Wgc/chess.jpg",
    },
    {
      id: 4,
      img: "https://i.ibb.co/Prw9mMt/dice-1.jpg",
    },
    {
      id: 5,
      img: "https://i.ibb.co/K5wW8Vr/pexels-vlada-karpovich-6114991.jpg",
    },
    {
      id: 6,
      img: "https://i.ibb.co/fXgr83B/puzzle.jpg",
    },
    {
      id: 7,
      img: "https://i.ibb.co/x3QmRMg/peakpx.jpg",
    },
    {
      id: 8,
      img: "https://i.ibb.co/NLjgwFL/pexels-alex-green-5691871.jpg",
    },
    {
      id: 9,
      img: "https://i.ibb.co/pr4CwMZ/pexels-alexander-vayionis-516114.jpg",
    },
    {
      id: 10,
      img: "https://i.ibb.co/NpWyCyy/pexels-cottonbro-studio-4004174.jpg",
    },
    {
      id: 11,
      img: "https://i.ibb.co/z4g9s7W/pexels-ylanite-koppens-776654.jpg",
    },
    {
      id: 12,
      img: "https://i.ibb.co/3TtBsZ3/pexels-jeswin-thomas-700971.jpg",
    },
    {
      id: 13,
      img: "https://i.ibb.co/XVgfnNw/pexels-syed-hasan-mehdi-839428.jpg",
    },
    {
      id: 14,
      img: "https://i.ibb.co/NYW17pH/pexels-lil-artsy-1111597.jpg",
    },
    {
      id: 15,
      img: "https://i.ibb.co/QdhkfMJ/pexels-suzy-hazelwood-3656855.jpg",
    },
    {
      id: 16,
      img: "https://i.ibb.co/mJC61hC/pexels-shamia-casiano-944735.jpg",
    },
  ];

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-3xl my-8 font-bold text-yellow-950">
          Check Our Gallery
        </h2>
        <div className={modal ? "modal open" : "modal"}>
          <img src={tempImg} alt="" />
          <FaRegWindowClose onClick={()=>setModal(false)} className="icon" />
        </div>
        <div className="container mx-auto my-12" data-aos="fade-down">
          <div className="gallery">
            {data.map((item, index) => {
              return (
                <div
                  className="images"
                  key={index}
                  onClick={() => getImg(item.img)}
                >
                  <img src={item.img} style={{ width: "100%" }} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
