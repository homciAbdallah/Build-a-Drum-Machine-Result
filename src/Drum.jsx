function Drum({ drumPads ,playAudio}) {
   


  return (
    <>
      <button  onClick={() => playAudio(drumPads.keyTrigger,drumPads.id)} className="drum-pad btn btn-secondary p-3 m-1" style={{width:'80px'}} id={drumPads.url} >
        {drumPads.keyTrigger}
        <audio className="clip" id={drumPads.keyTrigger} src={drumPads.url}/>
      </button>
       
    </>
  );
}

export default Drum;
/*

id={`drum-${dataََAudio.keyTrigger}`}
*/ 