import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <header className="flex justify-center bg-header-red py-3 w-screen h-14">
            <FontAwesomeIcon className="text-earth h-6 w-6 pr-2"icon={faEarthAmericas}></FontAwesomeIcon>
            <h2 className="text-white text-sm">my travel journal</h2>
        </header>
    )
}