import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GestorView.module.css';

function GestorView() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Função para filtrar os colaboradores por nome ou matrícula
  const handleSearch = (searchTerm) => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const filteredEmployees = storedEmployees.filter((employee) => 
      employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.matricula.includes(searchTerm)
    );
    setEmployees(filteredEmployees);
  };

  return (
    <section className={styles.employeeListContainer}>
      <h2>Colaboradores Registrados</h2>

      {/* Campo de pesquisa */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquise por nome ou matrícula"
          onChange={(e) => handleSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Tabela com os colaboradores */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Setor</th>
            <th>Curso Obrigatório</th>
            <th>Data de Realização do Curso</th>
            <th>Data de Vencimento do Curso</th>
            <th>Situação do Curso</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.nome}</td>
              <td>{employee.funcao}</td>
              <td>{employee.setor}</td>
              <td>{employee.cursoObrigatorio}</td>
              <td>{employee.dataRealizacaoCurso}</td>
              <td>{employee.dataVencimentoCurso}</td>
              <td>{employee.situacaoCurso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default GestorView;
