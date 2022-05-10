
import imginsrc from './imginsrc.jpg';
import myVideo from './myVideo.mp4';


function App() {
  let firstName ='souhir ';
  let lastName ='ben boubaker ';
  return (
    <div className="App">
      

      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className='title red'> {firstName} {lastName}</h1>
        <br/>
        <img src={imginsrc}  alt='imginsrc' style={{height:250}} />
        <br/>
        <img src='.\imginpublic.jpg' alt='imginpublic' style={{height:250}} className='App-logo'/>
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo.mp4} type='video/mp4'/>
      </video>



    </div>
  );
}

export default App;
