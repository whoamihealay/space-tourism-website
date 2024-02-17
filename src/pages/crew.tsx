import Head from "next/head";
import { useState } from "react";
import { CrewBackgrounds } from "../components/Backgrounds";
import CrewMember from "../components/CrewMembers";
import Layout from "../components/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { crew } from "../data/data.json";

const Crew = ({data}: InferGetStaticPropsType<typeof getStaticProps> ) => {
  const [active, setActive] = useState(0);
  const members = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];

  // When button is clicked, add 1 to index to cycle trough the members array. If index is equal to last item index, reset to first item index.
  const changeMember = () => {
    if (active === members.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>Frontend Mentor | Crew</title>
      </Head>
      <CrewBackgrounds />
      <Layout>
        <div>
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8 desktop:px-4 tracking-widest">
            <span
              className="text-lg opacity-25 px-2 font-bold"
              aria-hidden="true"
            >
              02
            </span>{" "}
            Meet your crew
          </h1>
          <CrewMember content={data[active]}>
            <button
              onClick={changeMember}
              className={`flex gap-4 p-4 even:bg-accent/100`}
            >
              {data?.map((_) => (
                <div
                id={`active-${active}`}
                className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
              ></div>
              ))}
              <span className="sr-only">change crew member</span>
            </button>
          </CrewMember>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = (() => {
  return {
    props: {
      data: crew
    },
  };
}) satisfies GetStaticProps;

export default Crew;
