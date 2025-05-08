import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy employee data
const employees = [
  {
    id: 1,
    name: 'Zak Ruvalcaba',
    extension: 1124,
    email: 'zak@vectacorp.com',
    title: 'CEO',
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
];

// Placeholder component
function EmployeeFilter() {
  return <div>This is a placeholder for the employee filter.</div>;
}

function EmployeeAdd() {
  return <div>This is a placeholder for a form to add an employee.</div>;
}

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = { employees };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    const updatedList = this.state.employees.filter(emp => emp.id !== id);
    this.setState({ employees: updatedList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Employee Management Application</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
        />
        <hr />
        <EmployeeAdd />
      </React.Fragment>
    );
  }
}

function EmployeeTable(props) {
  const rows = props.employees.map(emp => (
    <EmployeeRow
      key={emp.id}
      employee={emp}
      deleteEmployee={props.deleteEmployee}
    />
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Employed?</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleDelete() {
    this.toggleModal();
    this.props.deleteEmployee(this.props.employee.id);
  }

  render() {
    const { employee } = this.props;

    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.extension}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.dateHired.toDateString()}</td>
        <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>X</Button>

          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this employee?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>Cancel</Button>
              <Button variant="danger" onClick={this.handleDelete}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

ReactDOM.render(<EmployeeList />, document.getElementById('content'));
