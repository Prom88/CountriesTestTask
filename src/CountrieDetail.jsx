import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountrieService from './Countrie.services'

function CountrieDetail() {
	const [countrie, setCountrie] = useState({})
	const { id } = useParams()

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await CountrieService.getCountry(id)

			setCountrie(data.data[0])
		}
		fetchData()
	}, [id])

	if (!countrie.name) return <p>loading...</p>

	return (
		<>
			<div>
				<h1>{countrie.name.common}</h1>
				<h2 className='m-7'>Capital: {countrie.capital}</h2>
				<img src={countrie.flags.png} alt={countrie.name.common} />
			</div>
		</>
	)
}
export default CountrieDetail
