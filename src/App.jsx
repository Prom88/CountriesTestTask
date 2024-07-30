import { useEffect, useState } from 'react'
import './App.css'
import CountrieService from './Countrie.services'
import CountrieItem from './CountrieItem'

function App() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await CountrieService.getAll()

			setCountries(data.data)
		}

		fetchData()
	}, [])
	console.log(countries)

	return (
		<>
			<div>
				<h1 className='text-red-800 font-bold'>Countries:</h1>
				{countries.map((country) => (
					<CountrieItem
						key={new Date().toString}
						name={country.name.common}
						flag={country.flag}
						code={country.cca2}
						id={country.name.common}
					/>
				))}
			</div>
		</>
	)
}

export default App
