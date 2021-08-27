import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Thumbnail from "../components/Thumbnail";
import Warning from "../components/Warning";

export default function Home() {
  const router = useRouter();
  const [thumbnails, setThumbnails] = useState({
    validate: 0,
  });

  useEffect(() => {
    const { video } = router.query;
    return setThumbnails({
      validate: 1,
      id: video,
      sizes: {
        hd: `https://img.youtube.com/vi/${video}/maxresdefault.jpg`,
        sd: `https://img.youtube.com/vi/${video}/sddefault.jpg`,
        normal: `https://i3.ytimg.com/vi/${video}/hqdefault.jpg`,
        small: `https://img.youtube.com/vi/${video}/mqdefault.jpg`,
        xsmall: `https://img.youtube.com/vi/${video}/default.jpg`,
      },
    });
  }, [setThumbnails, router.query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Baixar Miniaturas do Youtube - Giosepe Luiz</title>
        <meta name="description" content="Baixar Miniaturas do Youtube" />
        <meta property="og:title" content="Baixar Miniaturas do Youtube - Giosepe Luiz" />
        <meta property="og:description" content="Baixar Miniaturas do Youtube" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumb.arqueirover.de" />
        <meta property="og:image" content="/images/og-social-banner.png" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ maxHeight: "100px" }}>
        <Link href="/">&#10094;&nbsp;&nbsp;&nbsp;Página Principal</Link>
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
