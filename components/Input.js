import React from 'react'
import { useState, useRef } from 'react';
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/solid';
import { Picker } from 'emoji-mart'
import data from '@emoji-mart/data'
import "emoji-mart/css/emoji-mart.css"; 

function Input() {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false)
    const filePickerRef = useRef(null)
  
    const addImageToPost = () => {};

    const addEmoji = (e) => {
        setInput(input + e.native)
      }
      const deletePost = async (e) => {
        e.stopPropagation()
        try {
          await deleteDoc(doc(db, 'posts', id))
          if (post?.image) {
            const imageRef = ref(storage, `posts/${id}/image`)
            await deleteObject(imageRef)
          }
          router.push('/')
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
        <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" 
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
         />
         <div className="w-full divide-y divide-gray-700">
            <div className={``}>
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
                            ref={filePickerRef}/>
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

                        {showEmojis && (
                            <Picker
                            onSelect={addEmoji}
                            style={{
                                position: "absolute",
                                marginTop: "465px",
                                marginLeft: -40,
                                maxWidth: "320px",
                                borderRadius: "20px",
                            }}
                            theme="dark"/>
                        )}
                </div> 
            </div>
         </div>
    </div>
  )
}

export default Input