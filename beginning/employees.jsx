const employees = [
	{
		id: 1,
		name: 'Zak Ruvalcaba', 
		extension: 1124, 
		email: 'zak@vectacorp.com',
		title: 'Chief Executive Officer',
		dateHired: new Date('2018-08-15'),
		isEmployed: true,
	},
	{
		id: 2,
		name: 'Sally Smith', 
		extension: 1125, 
		email: 'sally@vectacorp.com',
		title: 'Director of Sales',
		dateHired: new Date('2015-06-03'),
		isEmployed: true,
	},
]

class EmployeeFilter extends React.Component {
	render() {
		return (
			<div>This is a placeholder for the employee filter.</div>
		)
	}
}

class BorderWrap extends React.Component {
	render() {
		const borderedStyle = {border: "1px solid silver", padding: 6};
		return (
			<div style={borderedStyle}>
				{this.props.children}
			</div>
		)
	}
}

class EmployeeRow extends React.Component {
	render() {
		const employee = this.props.employee
		return (
			<tr>
				<td>{employee.name}</td>
				<td>{employee.extension}</td>
				<td>{employee.email}</td>
				<td>{employee.title}</td>
				<td>{employee.dateHired.toDateString()}</td>
				<td>{employee.isEmployed ? 'Yes' : 'No'}</td>
			</tr>
		)
	}
}

class EmployeeTable extends React.Component {
	render() {
		const EmployeeRows = employees.map(
			employee => <EmployeeRow key={employee.id} employee={employee}/>
		)
		return (
			<table className="bordered-table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Extension</th>
					<th>Email</th>
					<th>Title</th>
					<th>Date Hired</th>
					<th>Currently Employed?</th>
				</tr>
				</thead>
				<tbody>
					{EmployeeRows}
				</tbody>
			</table>
		)
	}
}

class EmployeeAdd extends React.Component {
	render() {
		return (
			<div>This is a placeholder for a form to add an employee.</div>
		)
	}
}

class EmployeeList extends React.Component {
	render() {
		return (
            <React.Fragment>
				<BorderWrap>
					<h1>Employee Management Application</h1>
					<EmployeeFilter />
					<hr />
					<EmployeeTable />
					<hr />
					<EmployeeAdd />
				</BorderWrap>
            </React.Fragment>
		)
	}
}

ReactDOM.render(<EmployeeList />, document.getElementById('content'))