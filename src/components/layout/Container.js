import styles from './Container.module.css';

//Container para centralização dos blocos na página

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass] || ''}`}>
      {props.children}
    </div>
  );
}

export default Container;
