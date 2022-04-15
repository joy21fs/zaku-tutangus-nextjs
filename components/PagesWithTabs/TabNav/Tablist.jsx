import Image from "next/image";
import styles_u from "../../../styles/contentPages.module.css";
import styles from "../../../styles/tabNav.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Tablist(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context("../../../public/images/tabs", false, /\.png$/)
  );

  return (
    <motion.nav
      role="navigation"
      className={`tab-nav ${styles["tab-nav"]} ${styles_u["tab-nav"]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear" }}
    >
      <ul
        role="tablist"
        className={`tablist ${styles["tablist"]}
          tablist--${props.pageName} 
          ${styles["tablist--" + props.pageName]} grid`}
      >
        {props.page.content.map((element) => (
          <li
            key={element.id}
            role="tab"
            className={`tab tab--${props.pageName}
              ${styles["tab--" + props.pageName]} `}
          >
            {typeof window !== "undefined" && (
              <Link
                className={`tab-link ${styles["tab-link"]}`}
                activeClass="active"
                to={element.id}
                spy={true}
                smooth={true}
                duration={500}
                containerId={props.pageName}
                passHref={true}
              >
                <Image src={images[element.tabLink]} alt={element.title} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
