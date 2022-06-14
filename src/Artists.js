export function Artists(props, onShow) {
    const imgStyles = { borderRadius: "50%", width: "3em" };
    const coverImg = `${props.coverImg}`;
    // const id = `${props.id}`;
    return (
        <div onClick={props.onShow}>

            <img className="Img" style={imgStyles} src={coverImg} alt={props.name} />
            <span className="Span">{props.name}</span>
            <br></br>
        </div>
    );
}

// const Artists = (props) => {
//     return (
//         <div>
//             <div>
//                 <img src={props.coverImg} alt={props.name}></img>
//             </div>
//         </div>
//     )
// }

// export default Artists;