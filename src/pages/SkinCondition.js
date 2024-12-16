import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './Header';
import Footer from './Footer';

const allConditions = [
  {
    id: 1,
    name: "Eczema",
    description: "A condition that makes your skin red and itchy.",
    image: "https://m4b6f3p8.rocketcdn.me/app/uploads/2021/04/atopicDermatitisEczema_147_lg.jpg",
  },
  {
    id: 2,
    name: "Psoriasis",
    description: "A skin disease that causes red, itchy scaly patches.",
    image: "https://skinsight.com/app/uploads/2021/08/zosterShingles_1838_lg-200x150.jpg",
  },
  {
    id: 3,
    name: "Acne",
    description: "A skin condition that occurs when hair follicles are clogged.",
    image: "https://skinsight.com/app/uploads/2021/04/acneVulgaris_928_lg-200x150.jpg",
  },
  {
    id: 4,
    name: "Rosacea",
    description: "A common skin condition that causes redness and visible blood vessels.",
    image: "https://skinsight.com/app/uploads/2021/08/rosacea_8163_lg-200x150.jpg",
  },
  {
    id: 5,
    name: "Hives",
    description: "A skin rash triggered by a reaction to food or medicine.",
    image: "https://skinsight.com/app/uploads/2021/04/arthropodBiteorStingPediatric_31744_lg-200x150.jpg",
  }
];

const SkinCondition = () => {
  const [visibleConditions, setVisibleConditions] = useState(8);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  };

  const loadMore = () => {
    setVisibleConditions((prev) => prev + 4);
  };

  return (
    <div>
      {/* Import and render the Header */}
      <Header />

      {/* Main content */}
      <div style={{ fontFamily: "Arial, sans-serif", color: "#333", textAlign: "center" }}>
        {/* Carousel */}
        <div style={{ padding: "20px", backgroundColor: "pink" }}>
          <Slider {...settings}>
            {allConditions.map((condition) => (
              <div key={condition.id}>
                <img src={condition.image} alt={condition.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                <h3>{condition.name}</h3>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for conditions */}
        <div style={{ padding: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          {allConditions.slice(0, visibleConditions).map((condition) => (
            <div key={condition.id} style={{ padding: "15px", borderRadius: "8px", width: "250px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <img src={condition.image} alt={condition.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
              <h3>{condition.name}</h3>
              <p>{condition.description}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleConditions < allConditions.length && (
          <button onClick={loadMore} style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>
            Load More
          </button>
        )}
      </div>

      {/* Import and render the Footer */}
      <Footer />
    </div>
  );
};

export default SkinCondition;
