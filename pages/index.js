import Head from "next/head";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Head>
        <title>Lintori – Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="h-screen bg-red-normal flex flex-col justify-center items-center relative font-sans">
        <Image src="/svgs/logo.svg" width={200} height={200} />
        <p className="text-white text-4xl italic mt-8">
          "A software shrine for humans."
        </p>
        <a href="https://github.com/Lintori">
          <img
            src="/images/Github-logo.png"
            className="w-12 absolute bottom-6 right-6"
          />
        </a>
      </main>
    </>
  );
};
export default index;
