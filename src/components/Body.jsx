import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Body(props) {
    return (
        <div>
            <section className="flex mt-8 ml-8">
                <img className="w-32 h-44 rounded-md" src={`${props.place.image}`} />
                <div className="ml-6 my-auto">
                    <span className="text-location text-smallest"><FontAwesomeIcon className="text-pin pr-1"icon={faLocationDot}></FontAwesomeIcon>
                        {props.place.location}
                        <a className=" pl-2 text-smallest text-maps underline" href="#">View on Google Maps</a>
                    </span>
                    <h2 className="text-2xl font-bold pb-3">{props.place.attraction}</h2>
                    <span className="py-2 text-smallest font-bold">{props.place.dates}</span>
                    <p className="text-smallest w-72">{props.place.funFacts}</p>   
                </div>
            </section>
        </div>
    )
}