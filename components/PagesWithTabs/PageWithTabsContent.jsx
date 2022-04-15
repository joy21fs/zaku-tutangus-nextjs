import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styles_u from "../../styles/contentPages.module.css";
import styles_t from "../../styles/pagesWithTabs.module.css";
const AboutPageContent = dynamic(() => import("./AboutPage/AboutPageContent"));
const TransportationPageContent = dynamic(() =>
  import("./TransportationPage/TransportationPageContent")
);

export default function PageContent(props) {
  const router = useRouter();
  return (
    <motion.main
      id={props.pageName}
      className={`main ${styles_u["main"]} ${styles_t[props.pageName]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {router.pathname === "/about" ? (
        <AboutPageContent
          page={props.page}
          pageName={props.pageName}
          album={props.album}
        />
      ) : (
        <TransportationPageContent
          page={props.page}
          pageName={props.pageName}
          album={props.album}
        />
      )}
    </motion.main>
  );
}
