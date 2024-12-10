import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState(''); //Uso do estado para definir o tipo de usuário
  useEffect(() => {
    const storedRole = localStorage.getItem('userType'); //Pega dentro da local storage o tipo de usuário
    setUserRole(storedRole); // Define o tipo do usuário
  }, []);

  const handleSearch = () => { //Filtro por nome do colaborador
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    let filteredEmployees = storedEmployees;

    if (searchTerm) {
      filteredEmployees = storedEmployees.filter((employee) => 
        employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
        employee.matricula.includes(searchTerm)
      );
    }

    //De acordo com o filtro, direciona para admview ou gestorview
    if (userRole === 'admin') {
      navigate('/admview', { state: { searchResults: filteredEmployees } }); //Pagina de admin
    } else if (userRole === 'gestor') {
      navigate('/gestorview', { state: { searchResults: filteredEmployees } }); //Pagina de gestor
    }
  };

  const handleCadastro = () => {
    navigate('/register');
  };

  const handleSeeAll = () => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    //Manda para a página de todos os colaboradores, sem filtro
    if (userRole === 'admin') {
      navigate('/admview', { state: { searchResults: storedEmployees } }); 
    } else if (userRole === 'gestor') {
      navigate('/gestorview', { state: { searchResults: storedEmployees } }); 
    }
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

        {/* Exibe o botão "Ver todos" para os papéis admin e gestor */}
        {(userRole === 'admin' || userRole === 'gestor') && (
          <button
            className={styles.see_all_button}
            onClick={handleSeeAll}
          >
            Ver Todos
          </button>
        )}
      </div>
    </section>
  );
}

export default Search;
