import styles from "./Navigation.module.css"
const Navigation = () => {
  // console.log(styles)
    return(
        <>
          <nav className={`${styles.Navigation} container`}>
            <div className="logo">
                <img src="" alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
          </nav>
        </>
    )
};
export default Navigation;