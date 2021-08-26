import Link from "next/link";
import styles from "../styles/Thumbnail.module.scss";

const Thumbnail = (props) => {
  return (
    <section className={styles.secondary}>
      <div className={styles.image}>
        <img src={props.video.sizes.small} />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href={props.video.sizes.hd}>
              <a rel="noopener noreferrer" target="_blank">
                <strong>HD</strong> 1280x720
              </a>
            </Link>
          </li>
          <li>
            <Link href={props.video.sizes.sd}>
              <a target="_blank" rel="noopener noreferrer">
                <strong>SD</strong> 640x480
              </a>
            </Link>
          </li>
          <li>
            <Link href={props.video.sizes.normal}>
              <a target="_blank" rel="noopener noreferrer">
                <strong>Normal</strong> 480x360
              </a>
            </Link>
          </li>
          <li>
            <Link href={props.video.sizes.small}>
              <a target="_blank" rel="noopener noreferrer">
                <strong>Small</strong> 320x180
              </a>
            </Link>
          </li>
          <li>
            <Link href={props.video.sizes.xsmall}>
              <a target="_blank" rel="noopener noreferrer">
                <strong>Extra Small</strong> 120x90
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Thumbnail;
