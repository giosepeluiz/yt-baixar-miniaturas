import Head from "next/head";
import { useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import Thumbnail from "../components/Thumbnail";
import { Warning } from "../components/Warning";

// const urlString = new URL("https://youtube.com/watch?v=ssvFnucdhfM");
// const videoId = urlString.searchParams.get("v");
// const urlString = new URL("https://youtu.be/fFcYkxKfbK8");
// const videoId = urlString.pathname.substring(1);
// console.log(videoId);

// 1280 x 720 => https://img.youtube.com/vi/8ZV4PF9wVFo/maxresdefault.jpg
// 640 x 480 => https://img.youtube.com/vi/8ZV4PF9wVFo/sddefault.jpg
// 480 x 360 => https://i3.ytimg.com/vi/8ZV4PF9wVFo/hqdefault.jpg
// 320 x 180 => https://img.youtube.com/vi/8ZV4PF9wVFo/mqdefault.jpg
// 120 x 90 => https://img.youtube.com/vi/8ZV4PF9wVFo/default.jpg

// https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=d41IrRqr7o8&key=AIzaSyCDU8LwAeIQljSmTv2TA0Ll4HBezVpx8Io

function isValidUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export default function Home() {
  const inputRef = useRef();
  const [thumbnails, setThumbnails] = useState({
    validate: 0,
  });

  const ytThumbnail = (value) => {
    if (isValidUrl(value) === true) {
      const urlString = new URL(value);
      let videoId = null;

      if (
        urlString.host === "youtube.com" ||
        urlString.host === "www.youtube.com" ||
        urlString.host === "youtu.be"
      ) {
        if (urlString.searchParams.get("v")) {
          videoId = urlString.searchParams.get("v");
          return setThumbnails({
            validate: 1,
            id: videoId,
            sizes: {
              hd: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              sd: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
              normal: `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              small: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
              xsmall: `https://img.youtube.com/vi/${videoId}/default.jpg`,
            },
          });
        }
        if (urlString.pathname.substring(1)) {
          videoId = urlString.pathname.substring(1);
          return setThumbnails({
            validate: 1,
            id: videoId,
            sizes: {
              hd: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              sd: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
              normal: `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              small: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
              xsmall: `https://img.youtube.com/vi/${videoId}/default.jpg`,
            },
          });
        }
        return setThumbnails({ validate: 0 });
      }
      return setThumbnails({ validate: 2 });
    }
    return setThumbnails({ validate: -1 });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Baixar Miniaturas do Youtube - Giosepe Luiz</title>
        <meta name="description" content="Baixar Miniaturas do Youtube" />
        <meta property="og:title" content="Baixar Miniaturas do Youtube - Giosepe Luiz" />
        <meta property="og:description" content="Baixar Miniaturas do Youtube" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumb.arqueirover.de" />
        <meta property="og:image" content="../images/og-social-banner.png" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input
          className={styles["input-text"]}
          type="text"
          ref={inputRef}
          placeholder="Digite a URL do vídeo no Youtube"
        />
        <input
          className={styles["input-button"]}
          type="button"
          onClick={() => ytThumbnail(inputRef.current.value)}
          value="Pegar Miniaturas"
        />
      </main>

      {thumbnails.validate !== 1 && <Warning validate={thumbnails.validate} />}

      {thumbnails.validate === 1 && <Thumbnail video={thumbnails} />}

      <footer className={styles.footer}>
        Criado por{" "}
        <a href="https://www.facebook.com/giosepeluiz" target="_blank" rel="noreferrer">
          Giosepe Luiz
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/giosepeluiz/yt-baixar-miniaturas"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
