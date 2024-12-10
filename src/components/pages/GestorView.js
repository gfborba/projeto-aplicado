import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './GestorView.module.css';

function GestorView() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();
  const location = useLocation();

  //Puxa os dados
  useEffect(() => {
    if (location.state?.searchResults) {
      setEmployees(location.state.searchResults);
    } else {
      const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
      setEmployees(storedEmployees);
    }
  }, [location]);

  //Filtro local de colaboradores
  const filteredEmployees = employees.filter((employee) =>
    employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.matricula.includes(searchTerm)
  );

  return (
    <section className={styles.employeeListContainer}>
      <h2>Colaboradores Registrados</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar por Nome ou Matrícula"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} //Atualiza o termo de pesquisa
          className={styles.searchInput}
        />
      </div>

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
          {filteredEmployees.map((employee, index) => (
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
