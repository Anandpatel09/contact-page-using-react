import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useState} from "react";
const ContactForm = () => {

    // const onViaCallSubmit=()=>{
    //     console.log("I am From call");
    // };

    const [name, setname]=useState("name");
    const [email, setemail]=useState("email");
    const [text, settext]=useState("text");

    const onSubmit=(event)=>{
        event.preventDefault();
        setname(event.target[0].value)
        setemail(event.target[1].value)
        settext(event.target[2].value)
        console.log({name,
            email,
            text
        });
    //  console.log(event);
    //  console.log("name",event.target[0].value);
    //  console.log("email",event.target[1].value);
    //   console.log("text",event.target[2].value);

    };



    return (
        <>
            <section className = {styles.container} >
                <div className={styles.contact_form}>
                    <div className={styles.top_btn}>
                    <Button 
                    text='VIA SUPPORT CHAT'
                     icon={<MdMessage fontSize="24px"/>}
                      />

                    <Button 
                    // onClick={onViaCallSubmit}
                    text='VIA CALL' 
                    icon={<FaPhoneAlt fontSize="24px"/>}
                     />

                    </div>
                    <Button isOutline={true} text='VIA EMAIL FORM' icon={<HiMail fontSize="24px"/>} />
                    <form onSubmit={onSubmit}>
                        <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" />
                        </div>
                        <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                        </div>
                        <div className={styles.form_control}>
                        <label htmlFor="name">Text</label>
                        <textarea name="text" rows="8"></textarea>
                        </div>
                        <div style={{
                         display:'flex',
                         justifyContent:'end'
                        }} >
                            <Button  text='Submit ' />
                            </div>
                            <div> {name + " " + email + " " + text + " " } </div>
                    </form>
                </div>
                <div className={styles.contact_image}></div>
            </section>
        </>
    )
};

export default ContactForm;