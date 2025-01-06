import "./noteCard.css"


const NoteCard = ( {title, image }) => {


    return (
        <div className="NoteCard">
            <img width="120" height="75" src={image} alt="note" loading="lazy"/>
            <p>{title}</p>
        </div>
    );


}

export default NoteCard;