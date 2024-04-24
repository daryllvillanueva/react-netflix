import React from 'react'
import { PiPlus } from "react-icons/pi";

const Accordion = ({faq}) => {

    const body = faq.answer;

    const [active, setActive] = React.useState(false);

    const handleActive = () => setActive(!active); //state

  return (
    <div className="accordion bg-stone-800 mb-5">
        <div className='flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-stone-700' onClick={handleActive}>
            <h4 className='text-2xl font-semibold question'>{faq.question}</h4>
            <PiPlus className={`text-3xl transition-all ${active ? "rotate-45" : "rotate-0"}`} />
        </div>
        <div className={`${active ? "max-h-[500px] border-stone-600 border-t-2" : "max-h-[0]"} overflow-hidden transition-all duration-300 h-full px-4 answer`}>
            <div className='mt-5 pb-5' dangerouslySetInnerHTML={{__html: body}}>
            </div>
        </div>
    </div>
  )
}

export default Accordion


// dangerouslySetInnerHTML={{__html: body} 