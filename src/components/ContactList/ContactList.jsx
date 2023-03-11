import PropTypes from "prop-types";
import style from './ContactList.module.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const ContactList = ({ contacts, deleteContact, filter}) => {
const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
    <>
        {contacts.length === 0 ? (
                <h3>Contact book is empty!</h3>) : (
                <ul className={style.list}>
                        {visibleContact.map(({id, name, number}) => (
                        <li className={style.item} key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={style.button} type="button" onClick={() => deleteContact(id)} value="delete">Delete contact</button>
                        </li>
                    ))}
                </ul>
            )}
    </>
    )    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    deleteContact: PropTypes.func.isRequired,
    filter: PropTypes.string,
};