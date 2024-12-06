import React, { useState } from 'react';
import styles from './Products.module.css'
import { useNavigate } from 'react-router-dom';  

function Product() {
  
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
  });

  
  const navigate = useNavigate();

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

  
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    storedEmployees.push(formData);
    localStorage.setItem('employees', JSON.stringify(storedEmployees));

    console.log('Colaborador registrado:', formData);

  
    navigate('/contact');
  };

  return (
    <section className={styles.registerContainer}>
      <h2>Registrar Colaborador</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className={styles.submitButton}>Registrar</button>
      </form>
    </section>
  );
}

export default Product;
