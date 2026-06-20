import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../Redux/EmployeeSlice';

export default function EmployeeList() {

  const employees = useSelector((state) => state.employees.allEmployees);
  const activeFilter = useSelector((state) => state.employees.activeFilter);
  const dispatch = useDispatch();

  const filteredEmployees = React.useMemo(() => 
    (activeFilter === 'All') ? employees :
    employees.filter((emp) => emp.status === activeFilter)
  , [employees, activeFilter]);

  const isActive = (emp, status) => 
    (emp.status === status) ? 'active' : '';

  return (
    <div className='container-fluid p-4 border rounded shadow-sm'>
      <div>
      <h1>Employees List</h1>

      </div>
      <div className="table-responsive">
        <table className='table table-striped table-hover' style={{ maxHeight: '500px', overflowY: 'auto', width: '100%' , tableLayout: 'fixed'}}>
          <thead>
            <tr>
              <th scope="col">Employee</th>
              <th scope="col">Team</th>
              <th scope="col">Employee</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className='overflow-auto'>
            {
              filteredEmployees.map((emp) => 
                <tr key={emp.id}>
                  <td scope="row">{emp.name}</td>
                  <td>{emp.team}</td>
                  <td>
                    <div 
                    className={`badge rounded-pill px-3 py-2 ${(emp.status === 'Going') ? 'bg-success' : (emp.status === 'Not Going') ? 'bg-danger' : 'bg-warning text-dark' }`}
                    style={{ width: '100px' }}
                    >
                      {emp.status}
                    </div>
                  </td>
                  <td className='d-flex flex-row gap-2'>
                    <button 
                      onClick={() => dispatch(updateStatus({
                        id: emp.id,
                        status: (emp.status === 'Going') ? 'Pending' : 'Going',
                      }))}
                      className={`btn btn-outline-success ${isActive(emp, 'Going')}`}
                    >Going</button>

                    <button 
                      onClick={() => dispatch(updateStatus({
                        id: emp.id,
                        status: (emp.status === 'Not Going') ? 'Pending' : 'Not Going',
                      }))}
                      className={`btn btn-outline-danger ${isActive(emp, 'Not Going')}`}
                    >Not Going</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
