import { useState } from "react"
import memesData from "../memesData"
import allMemeImages from "../memesData"

export default function Meme() {
    /**
        * !Challenge: 
        * 1. Set up the text inputs to save to
        *    the `topText` and `bottomText` state variables.
        * 2. Replace the hard-coded text on the image with
        *    the text being saved to state.
    */

    const [memeImage, setMemeImage] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={memeImage.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={memeImage.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}