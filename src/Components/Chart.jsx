import React from 'react'
import { Header } from 'semantic-ui-react'
import { Doughnut } from 'react-chartjs-2'

let labelCounters = {
	excellent: 0,
	above: 0,
	average: 0,
	below: 0,
	poor: 0
}

const Chart = (props) => {

	let message = props.message

	const extractMessages = (arg) => {
		labelCounters = {
			excellent: 0,
			above: 0,
			average: 0,
			below: 0,
			poor: 0
		}

		arg.forEach(msg => {
			if (msg.data.message === "Excellent") {
				labelCounters["excellent"]++
			}
			else if (msg.data.message === "Above Average") {
				labelCounters["above"]++
			}
			else if (msg.data.message === "Average") {
				labelCounters["average"]++
			}
			else if (msg.data.message === "Below Average") {
				labelCounters["below"]++
			}
			else if (msg.data.message === "Poor") {
				labelCounters["poor"]++
			}
		})
	}

	const data = {
		labels: [
			'Excellent',
			'Above Average',
			'Average',
			'Below Average',
			'Poor'
		],
		datasets: [{
			data: [
				labelCounters["excellent"],
				labelCounters["above"],
				labelCounters["average"],
				labelCounters["below"],
				labelCounters["poor"]
			],
			backgroundColor: [
				'#3b9977',
				'#994b3b',
				'#997a3b',
				'#593b99',
				'#995372'
			],
			hoverBackgroundColor: [
				'#2ad1a4',
				'#e0512d',
				'#d4a026',
				'#a28abd',
				'#e02d74'
			]
		}]
	}

	extractMessages(message)

	return (
		<div>
			<Header size='large' textAlign='center'>My Cooper Data Results</Header>
			<Doughnut
				data={data}
			/>
		</div>
	)
}

export default Chart