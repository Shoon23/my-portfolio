import React from "react";
import Header from "../components/SingleProject/Header";
import expenseTracker from "../data/expense_tracker.json";
import socialMedia from "../data/social_media.json";
import keyboardEccomm from "../data/keyboard_store.json";
import { ProjectTypes } from "../types";
import TechStacks from "../components/SingleProject/TechStacks";

import OverviewHeader from "../components/SingleProject/OverviewHeader";
import OverviewBody from "../components/SingleProject/OverviewBody";
import { useParams } from "react-router-dom";

type ProjectData = {
  [key: string]: any;
};

const projectData: ProjectData = {
  expenseTracker: expenseTracker,
  socialMedia: socialMedia,
  keyboardEccomm: keyboardEccomm,
};

const SingleProject: React.FC = () => {
  const { projectId } = useParams();

  const data: ProjectTypes = projectData[projectId as string];

  return (
    <>
      <Header name={data.name} />
      <main>
        <section className="min-h-screen bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
              <div className="space-y-8">
                <OverviewHeader site={data.site} github={data.github} />
                <OverviewBody img={data.img} overview={data.overview} />
              </div>
              <TechStacks techStackData={data?.techStack} />
              <div className="space-y-8">
                <h1 className="text-5xl font-bold">Features</h1>
                {data.features.map((feature, index) => (
                  <div className="space-y-8" key={index}>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto mb-2"
                        />
                        <p className="md:text-xl">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="mb-5 space-y-8">
                  <h1 className="text-5xl font-bold">Responsive</h1>
                  <div>
                    <img
                      src={data.responsive}
                      alt={"img"}
                      className="w-full h-auto mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleProject;
