import { useState, useEffect } from "react"

export default function Meme() {
    /**
        * !Challenge: 
        * As soon as the Meme component loads the first time,
        * make an API call to "https://api.imgflip.com/get_memes".
        * 
        * When the data comes in, save just the memes array part
        * of that data to the `allMemes` state
        * 
        * Think about if there are any dependencies that, if they
        * changed, you'd want to cause to re-run this function.
        * 
        * Hint: for now, don't try to use an async/await function.
        * Instead, use `.then()` blocks to resolve the promises
        * from using `fetch`. We'll learn why after this challenge.
    */

    const [memeImage, setMemeImage] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
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