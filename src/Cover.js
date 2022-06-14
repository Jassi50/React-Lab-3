import albums from './data';

export default function Cover(props) {
    let h3Style = { textAlign: "right" };
    console.log(props.tracks)
    const coverImg = `${props.coverImg}`
    const songList = props.tracks.map(song => {
        return (
            <div>
                <li>{song}</li>
            </div>
        )
    })
    return (
        <div>
            <img src={coverImg} alt={props.name} />
            <ol className="Ol">
                {songList}
            </ol>
        </div >
    );
}
// const Cover = (props) => {
//     const songList = props.track.map(song => {
//         return (
//             <div>
//                 <li>{song}</li>

//             </div>
//         )
//     })
//     return (
//         <div>
//             <img src={props.coverImg} alt={props.name}></img>
//             <ol>
//                 {songList}
//             </ol>
//         </div>
//     )
// };
// export default Cover;