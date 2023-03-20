import React, { useState, useEffect } from 'react'
import Player from './Player';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Dropdown from '../Dropdown/Dropdown';

function MusicPlayer() {
    const [songs, setSongs] = useState([
        {
            title: "Can't Get You out of My Head (Cover)",
            artist: "AnnenMayKantereit x Parcels",
            img_src: "/SongImage/AnnenMayKantereit.jpg",
            src: "./Songs/Can't Get You out of My Head (Cover) - AnnenMayKantereit x Parcels.mp3"
        },
        {
            title: "Peaches And Cream",
            artist: "112",
            img_src: "/SongImage/112PeachesAndCream.jpg",
            src: "./Songs/112 - Peaches And Cream.mp3"
        },
        {
            title: "Use Somebody",
            artist: "Kings of Leon",
            img_src: "/SongImage/KingsOfLeon.png",
            src: "./Songs/KingsOfLeon-UseSomebody.mp3"
        },
        {
            title: "I Know What You Want",
            artist: "Busta Rhymes, Mariah Carey ft. Flipmode Squad",
            img_src: "/SongImage/Bustamariah-IknowWhatYouWant.jpg",
            src: "./Songs/Busta Rhymes, Mariah Carey - I Know What You Want ft. Flipmode Squad.mp3"
        }
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex +1 > songs.length -1){
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex])

  return (
    <>
    <Sidebar />
    <Dropdown />
    <div className='musicPlayer'>
        <Player
            currentSongIndex = {currentSongIndex}
            setCurrentSongIndex = {setCurrentSongIndex}
            nextSongIndex = {nextSongIndex}
            songs = {songs}
        />
    </div>
    <Footer />
  </>
  )
}

export default MusicPlayer;