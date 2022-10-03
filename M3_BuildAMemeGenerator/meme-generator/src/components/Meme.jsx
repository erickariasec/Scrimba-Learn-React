import memesData from "../memesData"

export default function Meme() {
    /**
        * !Challenge: Get a random image from the `memesData` array when the "new meme image" button is clicked.
        * 
        * Log the URL of the image to the console. (Don't worry
        * about displaying the image yet)
    */

    let memeUrlImg

    const getMemeImage = () => {
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        memeUrlImg = memesArray[randomNumber].url
        console.log(memeUrlImg)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}