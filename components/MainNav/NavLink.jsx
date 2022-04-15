import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/mainNav.module.css";

export default function NavLink(props) {
  const router = useRouter();

  return (
    <li
      id={props.id}
      className={router.pathname === props.pathname ? "current" : null}
      onClick={(event) => {
        props.handleClick(event, props.id);
      }}
    >
      <Link
        href={props.pathname}
        className={`${styles["nav-link"]} nav-link`}
        passHref={true}
      >
        <div className={`${styles["nav-link"]} nav-link`}>
          <Image
            src={props.navLink}
            alt={props.title}
            width={316.8}
            height={185.6}
          />
        </div>
      </Link>
    </li>
  );
}
