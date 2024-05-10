import JsonData from './../data.json'

function Empleados(){
    function formatCurrency(value) {
        
        const formatter = new Intl.NumberFormat('es-GT', {
            style: 'currency',
            currency: 'GTQ',
            minimumFractionDigits: 2
        });
    
        return formatter.format(value);
    }
    
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr key={info.id}>
					<td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.company}</td>
                    <td>{formatCurrency(info.salary)}</td>
                    <td>{info.age}</td>
                    <td>{info.phone}</td>
                    <td>{info.email}</td>                    
				</tr>
			)
		}
	)

	return(
        
		<div>
            <div><h1>Tabla de empleados </h1></div>
			<table border={1}>
				<thead>
					<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Company</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Email</th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</table>
		</div>
	)
}

export default Empleados;

 


