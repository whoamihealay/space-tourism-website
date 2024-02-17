import Head from "next/head";
import { useState } from "react";
import { TechnologiesBackgrounds } from "../components/Backgrounds";
import Layout from "../components/Layout";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { technology } from "../data/data.json";
import Technology from "../components/Technology";



const Technologies = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [active, setActive] = useState(0);
  const activeStyles = "bg-white text-black";

  return (
    <div>
      <Head>
        <title>Technologies | Frontend Mentor</title>
      </Head>
      <TechnologiesBackgrounds />
      <Layout>
        <div>
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8 desktop:px-4 tracking-widest">
            <span
              aria-hidden="true"
              className="text-lg opacity-25 px-2 font-bold"
            >
              03
            </span>{" "}
            Space Launch 101
          </h1>
          <Technology content={data?.[active]}>
            {data?.map((item, index) => (
              <button
              key={item.name}
              className={`w-10 h-10 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 border-2 border-solid border-white/30 rounded-full font-serif hover:bg-white hover:text-black ${index === active ? activeStyles : ""}`}
              onClick={() => setActive(index)}
            >
              {index + 1}
            </button>
            ))}
          </Technology>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = (() => {
  return {
    props: {
      data: technology,
    },
  };
}) satisfies GetStaticProps;

export default Technologies;
