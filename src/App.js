import './App.css';
import albums from './data';
import { Artists } from './Artists';
import Cover from './Cover';
import { useState } from "react";
import './style.css';
// import './Img.css';

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="Div">
      {/* <Artists onShow={() => setIndex(1) /> */}
      <Cover name={albums.name} coverImg={albums[index].coverImg} tracks={albums[index].tracks} />
      <h1 className="H1">Select an Album</h1>
      {albums.map((album) => (
        <Artists
          onShow={() => setIndex(album.id)} name={album.name} coverImg={album.coverImg} id={album.id} />
      ))}
    </div>
  );
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <Artists coverImg={albums.coverImg} name={albums.name} tracks={albums.tracks} />
//       <h1>Select an Album</h1>
//       {
//         albums.map((album) => {
//           return <Cover coverImg={album.coverImg} name={album.name} id={album.id} />
//         })
//       }
//     </div>
//   )
// };
// export default App;
