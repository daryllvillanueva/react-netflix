import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FiBell, FiSearch } from 'react-icons/fi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FiInfo, FiPlay } from "react-icons/fi";
import SliderBasic from './SliderBasic'
import ModalMovieinfo from './ModalMovieinfo'
import { movies } from './data'

const Movie = () => {
    const[showMovieInfo, setMovieInfo] = React.useState(false);
    const[movieData, setMovieData] = React.useState(null);
    const handlShowMovieInfo = () => setMovieInfo(true);

    const [search, setSearch] = React.useState(false)
    const handleShowSearch = () => setSearch(true);
  return (
    <>
        <div className='bg-[#141414] text-white'>
            <div className={`banner bg-[url("../../img/movie/banner-netflix.jpg")] h-[100vh] bg-cover relative isolate`}>
                <div className="backdrop bg-black/30 absolute top-0 left-0 h-full w-full -z-10"></div>
                <div className="header py-4 px-4 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-10'>
                            <Link to="/home"><img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] h-[55px] object-cover'/></Link>
                            <nav>
                                <ul className='flex items-center gap-5 text-white'>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">TV Shows</Link></li>
                                    <li><Link to="#">Movies</Link></li>
                                    <li><Link to="#">New & Popular</Link></li>
                                    <li><Link to="#">My List </Link></li>
                                    <li><Link to="#">Browse by Languages</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <ul className='flex items-center gap-5 text-white'>
                                <li><button onClick={handleShowSearch}><FiSearch className='text-xl'/></button></li>
                                <li><button><FiBell className='text-xl'/></button></li>
                                <li className='flex items-center gap-1'>
                                    <button><img src="https://via.placeholder.com/50x50" alt="" className='rounded-md'/></button>
                                    <AiOutlineCaretDown/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="absolute left-[12%] bottom-[19%] text-white">
                    <h1 className='text-[60px] font-bold mb-3'>Breaking Bad</h1>
                    <ul className='flex gap-5'> 
                        <li><button className='px-7 py-2 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><FiPlay className='text-xl'/>Trailer</button></li>
                        <li><button className='px-7 py-2 rounded-md bg-stone-600 text-white border-stone-600 flex items-center gap-2'><FiInfo className='text-xl'/>More Info</button></li>
                    </ul>
                </div>

            </div>
            <div className='slider-wrapper px-10 py-20 overflow-hidden'>
                <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="trending" sliderHeader="Trending Movies"/>

                <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="asian" sliderHeader="Asian Movies"/>
            </div>
        </div>
        {showMovieInfo && <ModalMovieinfo setMovieInfo={setMovieInfo} movieData={movieData}/> }

        {search && <ModalSearch setSearch={setSearch}/>}
        
    </>
  )
}

export default Movie