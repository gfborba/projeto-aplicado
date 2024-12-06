import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index); 
    setEmployees(updatedEmployees); 

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <section className={styles.employeeListContainer}>
      <h2>Colaboradores Registrados</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Setor</th>
            <th>Data de Admissão</th>
            <th>Ações</th> 
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.nome}</td>
              <td>{employee.funcao}</td>
              <td>{employee.setor}</td>
              <td>{employee.dataAdmissao}</td>
              <td>
               
                <button
                  onClick={() => handleDelete(index)}
                  className={styles.deleteButton}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Contact;
