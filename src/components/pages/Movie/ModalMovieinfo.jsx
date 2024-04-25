import React from 'react'
import { FaPlay, FaPlusCircle, FaThumbsUp, FaTimesCircle } from 'react-icons/fa'
import { baseImgUrl } from '../../helpers/functions-general';

const ModalMovieinfo = ({setMovieInfo, movieData}) => {
    const handleClose = () => setMovieInfo(false);
  return (
    <div className='fixed top-0 left-0 isolate w-full h-screen'>
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/80"></div>
        <main className='max-w-[700px] w-full bg-[#141414] text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] h-full max-h-[700px]'>
            <div className='modal__banner '>
                <div className='relative'>
                    <img src={`${baseImgUrl}/movie/${movieData.img}`} alt="" className='opacity-80 w-full h-[400px] bg-cover'/>
                    <button onClick={handleClose} type="button" className='absolute top-4 right-4 text-[#141414] text-lg'><FaTimesCircle/></button>
                    <div className='absolute left-[20px] bottom-[26px] z-[999]'>
                        <h2 className='text-4xl font-bold mb-5'>{movieData.title}</h2>
                        <ul className='flex items-center gap-2 text-white'>
                            <li><button className='py-1 px-3 text-[#141414] flex items-center gap-3 bg-white rounded-md text-sm'><FaPlay/>Play</button></li>
                            <li><button><FaPlusCircle className='text-xl mt-1'/></button></li>
                            <li><button><FaThumbsUp className='text-xl'/></button></li>
                        </ul>
                    </div>
                </div>

                <div className="movie__info relative p-4 grid grid-cols-[3fr_1fr] gap-5">
                    <div className="info">
                        <div className="duration mb-6">
                            <p className='text-sm mb-2'><span>{movieData.year}</span> <span>{movieData.duration}</span> <span className='p-0.5 border border-white text-xs'>HD</span></p>
                            <p className='border border-white inline p-0.5 text-xs'>{movieData.rating}</p>
                        </div>
                        <p>{movieData.description}</p>
                    </div>
                    <ul>
                        <li className='text-stone-100 mb-3 text-sm'><span className='text-stone-500'>Cast:</span> {movieData.cast}</li>
                        <li className='text-stone-100 mb-3 text-sm'><span className='text-stone-500'>Genres:</span> {movieData.genre}</li>
                        <li className='text-stone-100 mb-3 text-sm'><span className='text-stone-500'>This Movie is: </span>{movieData.type}</li>
                    </ul>
                </div>
            </div>
        </main>
    
    </div>
  )
}

export default ModalMovieinfo