import React from 'react';

import Card from './Card.js'
import AlbumHeader from "./AlbumHeader";
import Sidebar from "./Sidebar";
import ChangeYourMind from "./music/change-your-mind.mp3";
import AndyYouAreAStar from "./music/andy-you-are-a-star.mp3";
import DespaciTo from "./music/despacito.mp3";
import ElMuro from "./music/el-muro.mp3";
import ForbiddenLovei from "./music/forbidden-love.mp3";
import Frozen from "./music/frozen.mp3";
import Gasolina from "./music/gas.mp3";
import IloveNewYork from "./music/i-love-new-york.mp3";
import Jump from "./music/jump.mp3";
import LittleStar from "./music/little-star.mp3";
import LoQuePasóPasó from "./music/lo-que-paso-paso.mp3";
import NighTrain from "./music/night-train.mp3";
import ParadiseCity from "./music/paradise-city.mp3";
import SinceIdontHaveYou from "./music/since-i-dont-have-you.mp3";
import ThisLove from "./music/this-love.mp3";
import WelcomeToTheFamily from "./music/welcome-to-the-family.mp3";
import WelcomeToTheJungle from "./music/welcome-to-the-jungle.mp3";
import WhenWeWhereYoung from "./music/when-we-were-young.mp3";




import Mp3PlayerLeft from "./Mp3PlayerLeft";


 function getTime(time) {
    if(!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
}

class MusicPlaylistPage extends React.Component{
    state  = {
        selectedTack: null,
        player:"stopped",
        title: "",
        artist: "",
        media: "hot-fuss"
        
    }

    componentDidMount() {
        this.player.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
    }

    componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
    }


    getInfo = (title) =>{
            return (`${title}`);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch(this.state.selectedTrack) {
                case "Change your mind":
                    track = ChangeYourMind;
                    break;
                case "Andy you are a star":
                    track = AndyYouAreAStar;
                    break;
                case "Despacito":
                    track = DespaciTo;
                    break;
                case "El muro":
                    track = ElMuro;
                    break;
                case "Forbidden lovei":
                    track = ForbiddenLovei;
                    break;
                case "Frozen":
                    track = Frozen;
                    break;
                case "Gasolina":
                    track = Gasolina;
                    break;
                case "I love New York":
                    track = IloveNewYork;
                    break;
                case "Jump":
                    track = Jump;
                    break;
                case "Little star":
                    track = LittleStar;
                    break;
                case "Lo que pasó pasó":
                    track = LoQuePasóPasó;
                    break;
                case "Night train":
                    track = NighTrain;
                    break;
                case "Paradise city":
                    track = ParadiseCity;
                    break;
                case "Since i don't have you":
                    track = SinceIdontHaveYou;
                    break;
                case "This love":
                    track = ThisLove;
                    break;
                case "Welcome to the family":
                    track = WelcomeToTheFamily;
                    break;
                case "Welcome to the jungle":
                    track = WelcomeToTheJungle;
                    break;
                case "When we where young":
                    track = WhenWeWhereYoung;
                    break;
                default:
                    break;
            }
            if(track) {
                this.player.src = track;
                this.player.play()
                this.player.volume = 0.3;
                this.setState({player: "playing"})
            }
        }
        if (this.state.player !== prevState.player) {
            if (this.state.player === "paused") {
                this.player.pause();
            } else if (this.state.player === "stopped") {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedTrack: null });
                this.setState({ title: "" });
                this.setState({ artist: "" });
            } else if (
                this.state.player === "playing" &&
                prevState.player === "paused"
            ) {
                this.player.play();
            }
        }
    }


    render() {
        const data = require('./data.json');

        const cards = data.map((item) => {
            return (
                <Card key={item.id} title={item.title} artist={item.artist} album={item.album} genre={item.genre}
                media={item.media} 

                     onClick={() => {this.setState({selectedTrack: item.title});
                     this.setState({title: item.title});
                     this.setState({artist: item.artist});
                     this.setState({media: item.media});
                     }}

                />
            );
        });

        const currentTime = getTime(this.state.currentTime);
        const duration = getTime(this.state.duration);
        let currentTitle = this.getInfo(this.state.title);
        let currentArtist = this.getInfo(this.state.artist);
        let currentMedia = this.getInfo(this.state.media);

        return (
            <selection id="root">
                <aside>
                    <Sidebar/>
                </aside>
                <main>
                    <div>
                        <AlbumHeader/>
                    </div>
                    <div class="Play-Menu">
                        <img className="Big-Green-Play-Button" src={require("./Images/Icons/Big-Green-Play-Button.png")}
                             alt="Play-Button"/>
                    </div>
                    <div>
                        {cards}
                    </div>
                </main>
                <footer>
                    <article className="Mp3Player">
                        <Mp3PlayerLeft
                            title = {currentTitle}
                            artist = {currentArtist}
                            image = {require("./Images/Imgs/" + currentMedia + ".png")}
                        />
                        <div className="Mp3Player-Content-Right">
                            {cards.title}
                            <div>
                                {this.state.player === "paused" && (
                                    <button className = "Mp3Player-Item Play" onClick={() => this.setState({ player: "playing" })}>
                                        Play
                                    </button>
                                )}
                                {this.state.player === "playing" && (
                                    <button className = "Mp3Player-Item Pause" onClick={() => this.setState({ player: "paused" })}>
                                        Pause
                                    </button>
                                )}
                                {this.state.player === "playing" || this.state.player === "paused" ? (
                                    <button className = "Mp3Player-Item Stop" onClick={() => this.setState({ player: "stopped" })}>
                                        Stop
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                            {this.state.player === "playing" || this.state.player === "paused" ? (
                                <div className = "Mp3Player-Item-Time" >
                                    {currentTime} / {duration}
                                </div>
                            ) : (
                                ""
                            )}
                            <audio ref={ref => this.player = ref} />
                        </div>
                    </article>
                </footer>
            </selection>

        )
    }}

    export default MusicPlaylistPage
