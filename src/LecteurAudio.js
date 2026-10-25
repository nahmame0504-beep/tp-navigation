import musique from './La diabla (jdr-Remix).mp3';

function LecteurAudio() {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Lecteur audio multimédia</h3>
      <audio controls>
        <source src={musique} type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  );
}

export default LecteurAudio;