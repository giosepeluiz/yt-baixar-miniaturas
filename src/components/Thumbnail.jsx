import Image from "next/image";
import styles from "../styles/Thumbnail.module.scss";

const Thumbnail = (props) => {
  const { video } = props;
  return (
    <section className={styles.secondary}>
      <div className={styles.image}>
        <Image src={video.sizes.small} alt="Thumbnail" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href={video.sizes.hd} rel="noopener noreferrer" target="_blank">
              <strong>HD</strong> 1280x720
            </a>
          </li>
          <li>
            <a href={video.sizes.sd} target="_blank" rel="noopener noreferrer">
              <strong>SD</strong> 640x480
            </a>
          </li>
          <li>
            <a href={video.sizes.normal} target="_blank" rel="noopener noreferrer">
              <strong>Normal</strong> 480x360
            </a>
          </li>
          <li>
            <a href={video.sizes.small} target="_blank" rel="noopener noreferrer">
              <strong>Small</strong> 320x180
            </a>
          </li>
          <li>
            <a href={video.sizes.xsmall} target="_blank" rel="noopener noreferrer">
              <strong>Extra Small</strong> 120x90
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Thumbnail;
