import globe from '../images/globe--icon.svg'

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav--header">
                <img src={globe} className="nav--logo" alt="Globe Icon"/>
                <span className="nav--title">my travel journal.</span>
            </div>
            
        </div>
    )
}