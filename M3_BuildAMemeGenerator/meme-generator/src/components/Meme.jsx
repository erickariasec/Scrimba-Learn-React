import { useState, useEffect } from "react"

export default function Meme() {

    /**
        *!useEffect takes a function as its parameter. If that function
        *!returns something, it needs to be a cleanup function. Otherwise,
        *!it should return nothing. If we make it an async function, it
        *!automatically retuns a promise instead of a function or nothing.
        *!Therefore, if you want to use async operations inside of useEffect,
        *!you need to define the function separately inside of the callback
        *!function, as seen below:
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
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
    
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))

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