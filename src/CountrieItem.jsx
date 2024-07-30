/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
function CountrieItem({ ...props }) {
	return (
		<div>
			<Link
				className='text-lg text-blue-300'
				to={`/CountriesTestTask/country/${props.code}`}
			>
				{props.name} {props.flag} {props.code}
			</Link>
		</div>
	)
}

export default CountrieItem
