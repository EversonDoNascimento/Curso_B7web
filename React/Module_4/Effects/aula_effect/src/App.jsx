import { useState} from 'react'
import Video from './components/video';

function App() {
  const [playing,setPlaying] = useState(false);



  return (
    <>
    <Video url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" playing={playing}></Video>
    <div>{playing? "Rodando":"Pausado"}</div>
    <button onClick={()=> setPlaying(!playing)}>{playing? "Pause": "Play"}</button>
    </>
  )
}

export default App
