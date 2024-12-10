import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { useNavigate, useLocation } from 'react-router-dom';  

function Register() { //Dados do formulário de cadastro
  const [formData, setFormData] = useState({
    nome: '',
    rg: '',
    cpf: '',
    idade: '',
    email: '',
    telefone: '',
    funcao: '',
    setor: '',
    matricula: '',
    matriculaGestor: '',
    dataAdmissao: '',
    cursoObrigatorio: '',
    dataRealizacaoCurso: '',
    dataVencimentoCurso: '',
    situacaoCurso: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  //Calcula o status do curso
  const calcularSituacaoCurso = (dataVencimentoCurso) => {
    const hoje = new Date();
    const vencimento = new Date(dataVencimentoCurso);

    //Analisa se a data de vencimento do curso é após a data atual
    return vencimento >= hoje ? 'Válido' : 'Vencido';
  };

  //Puxa os dados dos colaboradores caso estamos no modo de edição
  useEffect(() => {
    if (location.state?.edit) {
      const { employee } = location.state;
      setFormData(employee); 
    }
  }, [location]);
  // Atualização da situação do curso
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'dataVencimentoCurso') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        situacaoCurso: calcularSituacaoCurso(value) 
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    if (location.state?.edit) {
      //Subsitui o colaborador no localStorage em caso de edição
      const updatedEmployees = [...storedEmployees];
      updatedEmployees[location.state.index] = formData;
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    } else {
      //Guarda na localstorage novos cadastros
      storedEmployees.push(formData);
      localStorage.setItem('employees', JSON.stringify(storedEmployees));
    }

    console.log('Colaborador salvo:', formData);
    navigate('/admview');
  };

  return (
    <section className={styles.registerContainer}>
      <h2>{location.state?.edit ? 'Editar Colaborador' : 'Registrar Colaborador'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>RG:</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Função:</label>
          <input
            type="text"
            name="funcao"
            value={formData.funcao}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Setor:</label>
          <input
            type="text"
            name="setor"
            value={formData.setor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Matrícula:</label>
          <input
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Matrícula do Gestor:</label>
          <input
            type="text"
            name="matriculaGestor"
            value={formData.matriculaGestor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Data de Admissão:</label>
          <input
            type="date"
            name="dataAdmissao"
            value={formData.dataAdmissao}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Curso Obrigatório:</label>
          <input
            type="text"
            name="cursoObrigatorio"
            value={formData.cursoObrigatorio}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Data de Realização do Curso:</label>
          <input
            type="date"
            name="dataRealizacaoCurso"
            value={formData.dataRealizacaoCurso}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Data de Vencimento do Curso:</label>
          <input
            type="date"
            name="dataVencimentoCurso"
            value={formData.dataVencimentoCurso}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Situação do Curso:</label>
          <input
            type="text"
            name="situacaoCurso"
            value={formData.situacaoCurso} 
            readOnly
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          {location.state?.edit ? 'Atualizar' : 'Registrar'}
        </button>
      </form>
    </section>
  );
}

export default Register;
