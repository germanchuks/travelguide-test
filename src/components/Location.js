import pinpoint from '../images/location--icon.svg'

export default function Location(props) {
    return (
        <div className="location">
            <a href={props.imageUrl} rel="noreferrer" target='_blank'><img src={props.image} alt="Photograph of Travel Location "/></a>
            <div className= "location--visited">
                <div className="location--address">
                    <img src={pinpoint} className="pinpoint" alt="Pinpoint Icon"/>
                    <span className="location--country">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} className="location--google--link"  rel="noreferrer" target='_blank'>View on Google Maps</a>
                </div>
                <div className="location--title">{props.title}</div>
                <div className="location--date--visited">{props.startDate} - {props.endDate}</div>
                <div className="location--description">{props.description}</div>
            </div>
            
        </div>
    )
}