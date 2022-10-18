import React from 'react'
import { useState, useRef } from 'react';
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/solid';
import Picker from 'emoji-picker-react'; 
import data from '@emoji-mart/data';


function Input() {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false)
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)

    const sendPost = () => {
      if (loading) return;
      setLoading(true);
    }
  
    const addImageToPost = () => {};


    /* const emoji-mart */
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji.native);
      };

      

  return (
      <div 
        className={`border-b border-gray-700 p-3 flex space-x-3`}
      >
        <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" 
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
         />
         <div className="w-full divide-y divide-gray-700">
            <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                rows="2"
                placeholder="What's happening?"
                className="bg-transparent outline-none text-[#d9d9d9]
                text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                />

                {selectedFile && (
                     <div className="relative">
                     <div className="absolute w-8 h-8 bg-[#15181c]
                     hover:bg-[#272c26] bg-opacity-75 rounded-full flex
                     item-center justify-center top-1 left-1 
                     cursor-pointer" onClick={() => setSelectedFile(null)}>
                         <XIcon className="text-white h-5"/>
                     </div>
                     <img 
                     src={selectedFile} 
                     alt="" 
                     className="rounded-2xl max-h-80 object-contain"
                     />
                 </div>
                )}  
           </div>

             <div className="flex items-center justify-between pt-2.5">
                <div className="flex items-center">
                        <div className="icon" onClick={() => filePickerRef.
                            current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                            <input 
                            type="file"
                            hidden 
                            onChange={addImageToPost} 
                            ref={filePickerRef}
                            />
                        </div>

                           <div className="icon rotate-90">
                            <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
                           </div>

                           <div className="icon" onClick={() => setShowEmojis
                            (!showEmojis)}>
                            <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
                           </div>

                           <div className="icon">
                            <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
                           </div>

                     <div className="emojimart">   
                        {showEmojis && (
                            <Picker
                            data={data}
                            onEmojiSelect={addEmoji}
                            theme="dark"
                            />
                        )}
                    </div>  
                </div>
                 <button className="bg-[#1d9bf0] text-white rounded-full
                 px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8]
                 disabled:hover:bg-[#1d9bf0] disabled:opacity-50
                 disabled:cursor-default" disabled={!input.trim() && !selectedFile}
                 /* onClick={sendPost} */
                 >
                  Tweet
                 </button>
            </div>
         </div>
    </div>
  )
}

export default Input