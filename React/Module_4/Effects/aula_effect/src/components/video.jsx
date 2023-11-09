import { useEffect, useRef } from "react";
const Video = ({ url, playing }) => {
    const tagVideo = useRef(null);

    useEffect(()=>{
        if(playing){
            tagVideo.current?.play();
        }else{
            tagVideo.current?.pause();
        }
    })


    return<>
    <video ref={tagVideo} src={url} loop playsInline></video>
    
    </>
}

export default Video