import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Slider from 'react-slick';
import { baseImgUrl } from '../../helpers/functions-general';

const SliderBasic = ({setMovieInfo, movies, setMovieData, grouping, sliderHeader}) => {
  const handleShowMovieInfo = (data) => {
    setMovieData(data)
    setMovieInfo(true)
  }


  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}>
        <PiCaretRightBold />
    </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}>
            <PiCaretLeftBold />
        </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  const getGroupings = movies.filter((movie) => movie.grouping === grouping)

  return (
    <>
      <div className='relative mb-5'>
      <h3 className='text-3xl mb-5 font-bold'>{sliderHeader}</h3>
      <Slider {...settings}>
        {getGroupings.map((movie,key) =>(
          <div key={key}>
            <button className='relative' onClick={() => handleShowMovieInfo(movie)}>
              <img src={`${baseImgUrl}/movie/${movie.img}`}alt="" className='w-[350px] h-[300px] bg-cover'/>
              <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[12px]'>Recently Added</span>
            </button>
          </div>
        ))}
       

      </Slider>
      </div>
    </>
  );
}

export default SliderBasic