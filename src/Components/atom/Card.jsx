import styles from './Card.module.css'
export function Card({cardDetails}){

    const {first_name,last_name,avatar,email}=cardDetails
    return(

        <div className={styles.names}>
            <img  className={styles.image}src={avatar}/>
            <h6>{first_name} {last_name}</h6>
            <p>{email}</p>
        </div>
    )
}