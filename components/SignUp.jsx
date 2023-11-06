import styles from './styling/SignUp.module.css'

const SignUp = () => {

    return (
        <div className={styles.signup_form} >
            <form action="" className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type='submit' className={styles.submitButton}>SIGN UP</button>
            </form>
        </div>
    )
};

export default SignUp;