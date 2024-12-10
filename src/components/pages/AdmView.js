import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AdmView.module.css';

function AdmView() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // Estado para armazenar o termo de pesquisa
  const navigate = useNavigate();
  const location = useLocation();  // Usado para acessar o estado passado pela navegação

  useEffect(() => {
    if (location.state?.searchResults) {
      setEmployees(location.state.searchResults);  // Usar os resultados da pesquisa
    } else {
      // Caso não tenha resultados filtrados, exibe todos os colaboradores
      const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
      setEmployees(storedEmployees);
    }
  }, [location]);

  // Função para excluir um colaborador
  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Função para editar um colaborador
  const handleEdit = (index) => {
    const employeeToEdit = employees[index];
    navigate('/register', {
      state: { edit: true, index, employee: employeeToEdit },
    });
  };

  // Função para filtrar os colaboradores com base no nome ou matrícula
  const filteredEmployees = employees.filter((employee) =>
    employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.matricula.includes(searchTerm)
  );

  return (
    <section className={styles.employeeListContainer}>
      <h2>Colaboradores Registrados</h2>

      {/* Campo de pesquisa */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar por Nome ou Matrícula"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Atualiza o termo de pesquisa
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
            <th>Editar</th> {/* Nova coluna para o botão Editar */}
            <th>Excluir</th> {/* Nova coluna para o botão Excluir */}
          </tr>
        </thead>
        <tbody>
          {/* Exibe apenas os colaboradores filtrados */}
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.nome}</td>
              <td>{employee.funcao}</td>
              <td>{employee.setor}</td>
              <td>{employee.cursoObrigatorio}</td>
              <td>{employee.dataRealizacaoCurso}</td>
              <td>{employee.dataVencimentoCurso}</td>
              <td>{employee.situacaoCurso}</td>
              {/* Botões de ação em colunas separadas */}
              <td>
                <button
                  onClick={() => handleEdit(index)}
                  className={styles.editButton}
                >
                  Editar
                </button>
              </td>
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

export default AdmView;
