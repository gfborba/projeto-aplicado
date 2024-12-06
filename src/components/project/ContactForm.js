import styles from './ContactForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function OrderForm({btnText}){
    return(
        <form className={styles.form}>
 
           <Input 
                type="text"
                text="Digite seu e-mail"
                name="email"
                placeholder="Ex: pablomarcal@lulalivre.com"
           />

            <Input 
                type="number"
                text="Digite seu número"
                name="number"
                placeholder="Ex: 4899999999"
           />

          <Select 
           name="category_id" 
           text="Indique o motivo do contato"
           />

           

          <SubmitButton text={btnText} />

           
        </form>
    )
}

export default OrderForm