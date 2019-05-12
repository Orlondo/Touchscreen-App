import React from 'react';
import ReactDOM from 'react-dom';
// import { Player, BigPlayButton } from 'video-react';
import ItemButtonGenerator from './ItemButtonGenerator';
import Icons from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon';

let isVideoDone = false;
let currentVideo = 0;
let nextIndex = 0;
let isVideoLoop = false;
let videoArray = [
  "/videos/link-75th-anniversary-video.mp4", 
  "/videos/link-corporate-video.mp4", 
  "/videos/link-final-1080p.mp4"
];


export default class AboutUSVideoController extends ItemButtonGenerator {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      source: this.items[0].video,
    };

    this.playVideoLoop = this.playVideoLoop.bind(this);
  }

  playVideoLoop() {
    let video = this.refs.player; 

    
    
    if(this.state.index === videoArray.length - 1) {
      this.state.index = 0;
      nextIndex = 0;
    }

    this.setState({
      index: nextIndex,
      source: videoArray[nextIndex]
    }) 

    nextIndex++;

    if(isVideoLoop) {
      video.addEventListener('ended', this.playVideoLoop);
    }
  }

  handleItemButton(e, props) {
    let item = e.target.getAttribute('data-id');
    let video = this.refs.player;
    if(this.items[item].id === "video-loop") {
      isVideoLoop = true;
        nextIndex = 0;
        this.playVideoLoop();
        this.exitFullScreen();
        this.fullScreen(video);
    } else {
      isVideoLoop = false;
    }
    this.playSingleVideo(e, item)
  }

  fullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.webkitRequestFullScreen ) {
      element.webkitRequestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
  }

  playSingleVideo(e, item) {
    this.stopVideo(e, item)
    this.setState(() => {
      return {
        source: this.items[item].video,
      }
    })
  }

  stopVideo(e, item) {
    let video = this.refs.player;

    video.addEventListener("ended", e => {
      if(this.items[item].id !== "video-loop" && isVideoLoop === false) {
        var playPromise = video.play();
 
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            video.pause();
          })
          .catch(error => {
          });
        }
      } else if (this.items[item].id === "video-loop" && isVideoLoop === true) {
        playPromise;
      }
    })
  }

  exitFullScreen() {
    return (
      <div className="fullscreen-exit">
        <Icons size={64} icon={home}/>
      </div>
    )
  }

  ItemButtonContainer(props) {
    return (
      <div className="item-container" style={this.itemContainerHeight}>
          {this.items.map((item, index) => 

                  <button 
                      // ref={div => (this.dragItem[index] = div)} 
                      style={{backgroundImage:`url(${item.backgroundImage})`}}
                      onClick={this.handleItemButton} 
                      className="menu-button itemMenu-btn"
                      data-id={index}>
                          {item.buttonLabel}
                  </button>

          )}
      </div>
    )
  }

  render() {
    return (
      <div class="scene">
        <this.DataBlockContainer />
        <div className="gallery-container aboutUs-gallery-container">
            <div className="selectedItem-container">
              <video
                  ref="player"
                  preload
                  playsInline
                  autoPlay
                  controls
                  src={this.state.source}>
              </video>
            </div>
            <this.ItemButtonContainer />
        </div>
      </div>
    );
  }
}
