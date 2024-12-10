import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState(''); // Usamos o estado local para controlar o papel do usuário

  // Recupera o papel do usuário do localStorage quando o componente é montado
  useEffect(() => {
    const storedRole = localStorage.getItem('userType');
    setUserRole(storedRole); // Define o papel do usuário
  }, []);

  const handleSearch = () => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    let filteredEmployees = storedEmployees;

    if (searchTerm) {
      filteredEmployees = storedEmployees.filter((employee) => 
        employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
        employee.matricula.includes(searchTerm)
      );
    }

    // Armazena os resultados da pesquisa no localStorage
    localStorage.setItem('searchResults', JSON.stringify(filteredEmployees));

    // Navega para a página correta com base no papel do usuário
    if (userRole === 'admin') {
      navigate('/admview'); // Administrador
    } else if (userRole === 'gestor') {
      navigate('/gestorview'); // Gestor
    }
  };

  const handleCadastro = () => {
    navigate('/register');
  };

  return (
    <section className={styles.container}>
      <h2>Pesquise por Matrícula ou Nome</h2>
      <div className={styles.about_container}>
        <label htmlFor="search" className={styles.search_label} />
        <input
          id="search"
          type="text"
          placeholder="Matrícula ou Nome"
          className={styles.search_input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className={styles.search_button}
          onClick={handleSearch}
        >
          Pesquisar
        </button>
        
        {/* Exibe o botão de Cadastro somente se o usuário for "admin" */}
        {userRole === 'admin' && (
          <button
            className={styles.cadastro_button}
            onClick={handleCadastro}
          >
            Cadastro
          </button>
        )}
      </div>
    </section>
  );
}

export default Search;
