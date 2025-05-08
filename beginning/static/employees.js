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
  {
    id: 3,
    name: 'Cody Evans',
    extension: 1110,
    email: 'cody@vectacorp.com',
    title: 'Systems Analyst',
    dateHired: new Date('2022-08-26'),
    isEmployed: true,
  },
  {
    id: 4,
    name: 'Evan Davis',
    extension: 5433,
    email: 'evan@vectacorp.com',
    title: 'Software Engineer',
    dateHired: new Date('2022-09-07'),
    isEmployed: false,
  },
];

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
    const employee = this.props.employee;

    return React.createElement("tr", null,
      React.createElement("td", null, employee.name),
      React.createElement("td", null, employee.extension),
      React.createElement("td", null, employee.email),
      React.createElement("td", null, employee.title),
      React.createElement("td", null, employee.dateHired.toDateString()),
      React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'),
      React.createElement("td", null,
        React.createElement("button", {
          className: "btn btn-danger",
          onClick: this.toggleModal
        }, "X"),
        this.state.modalVisible &&
        React.createElement(React.Fragment, null,
          React.createElement("div", {
            className: "modal fade show d-block",
            tabIndex: "-1",
            role: "dialog"
          },
            React.createElement("div", { className: "modal-dialog", role: "document" },
              React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                  React.createElement("h5", { className: "modal-title" }, "Delete Employee?"),
                  React.createElement("button", {
                    type: "button",
                    className: "btn-close",
                    onClick: this.toggleModal
                  })
                ),
                React.createElement("div", { className: "modal-body" },
                  React.createElement("p", null, "Are you sure you want to delete this employee?")
                ),
                React.createElement("div", { className: "modal-footer" },
                  React.createElement("button", { className: "btn btn-secondary", onClick: this.toggleModal }, "Cancel"),
                  React.createElement("button", { className: "btn btn-success", onClick: this.handleDelete }, "Yes")
                )
              )
            )
          ),
          React.createElement("div", { className: "modal-backdrop fade show" })
        )
      )
    );
  }
}

class EmployeeTable extends React.Component {
  render() {
    const rows = this.props.employees.map(emp =>
      React.createElement(EmployeeRow, {
        key: emp.id,
        employee: emp,
        deleteEmployee: this.props.deleteEmployee
      })
    );

    return React.createElement("table", { className: "table table-striped" },
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", null, "Name"),
          React.createElement("th", null, "Extension"),
          React.createElement("th", null, "Email"),
          React.createElement("th", null, "Title"),
          React.createElement("th", null, "Date Hired"),
          React.createElement("th", null, "Currently Employed?"),
          React.createElement("th", null, "Actions")
        )
      ),
      React.createElement("tbody", null, rows)
    );
  }
}

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    const updated = this.state.employees.filter(emp => emp.id !== id);
    this.setState({ employees: updated });
  }

  render() {
    return React.createElement(React.Fragment, null,
      React.createElement("h1", { className: "mb-3" }, "Employee Management Application"),
      React.createElement(EmployeeTable, {
        employees: this.state.employees,
        deleteEmployee: this.deleteEmployee
      })
    );
  }
}

ReactDOM.render(
  React.createElement(EmployeeList, null),
  document.getElementById("content")
);
