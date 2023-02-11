import Location from '../components/Location'
import travelData from '../components/travelData'

export default function Main() {
    const traveldata = travelData
    return (
        <div className="main">
            {traveldata.map((item) => (
                <Location key={item.id}
                    {...item}
                    />
            ))}
        </div>
    )
}