import Aos from "aos";
import { useEffect } from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "A Comparative Study of Twitter's Influence on NFT Collections Valuation and Market Performance: - How Influence of Tweets Affect the NFT Marketplace(Time Series Forecasting)",
    link: "https://www.researchgate.net/publication/365904230_A_COMPARATIVE_STUDY_OF_TWITTER'S_INFLUENCE_ON_NFT_COLLECTIONS_VALUATION_AND_MARKET_PERFORMANCE_-_HOW_INFLUENCE_OF_TWEETS_AFFECT_THE_NFT_MARKETPLACE",
  },
  {
    title: "Project 2",
    description:
      "Predicting the 2020 US presidential Election Result using Twitter data(Sentiment Analysis and WordCloud)",
    link: "https://www.researchgate.net/publication/362253891_Predicting_the_2020_US_presidential_Election_Result_using_Twitter_data",
  },
  {
    title: "Project 3",
    description:
      "Customer Segmentation using RFM Analysis and K-Means Clustering in Python",
    link: "https://medium.com/@omotolaniosems/customer-segmentation-using-rfm-analysis-and-k-means-clustering-in-python-d9d90fc24e18",
  },
  {
    title: "Project 4",
    description: "Revenue and Sales Analysis of an Online Retail Store",
    link: "https://public.tableau.com/app/profile/kehinde.osems.omotolani/viz/RevenueandSalesAnalysisofanOnlineStore/Dashboard1",
  },
  {
    title: "Project 5",
    description:
      "Analysis of CFPB Consumer Complaint Database using BigQuery and Looker.",
    link: "https://github.com/omotolani12/Analysis-of-CFPB-Consumer-Complaint-Database-using-Big-Query-and-Looker",
  },
  {
    title: "Project 6",
    description:
      "Network Visualisation of the Movielens dataset using Networkx and Cosine Similarities.",
    link: "https://github.com/omotolani12/Network-Visualization-of-the-Movielens-dataset-using-Networkx-and-Cosine-Similiarities",
  },
  {
    title: "Project 7",
    description: "The Data Ethics of Digital Finance",
    link: "https://medium.com/@omotolaniosems/the-data-ethics-of-digital-finance-739a45af9c3e",
  },
  {
    title: "Project 8",
    description:
      "Web Scraping and Analysis of Competition Press Release (Sentiment and Word Cloud Analysis)",
    link: "https://github.com/omotolani12/Web-Scraping-and-Analysis-of-Competition-Press-Release-Sentiment-and-Word-Cloud-Analysis-",
  },
  {
    title: "Project 9",
    description: "Digikolo A Digital Saving Product",
    link: "https://digikolo.com/",
  },
  {
    title: "Project 10",
    description: "Embedded Systems and Automation in Modern Devices",
    link: "https://medium.com/@omotolaniosems/embedded-systems-and-automation-in-modern-devices-9d1994e6be20",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS with a duration option (optional)
  }, []);
  return (
    <>
      <h1
        className="text-4xl font-bold text-primary md:text-start text-center leading-tight "
        data-aos="fade-right"
        id="projects"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3.5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

const ProjectCard = ({ description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <p className="text-gray-700 mb-4 text-lg" data-aos="flip-right">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <button
          className="  bg-primary text-white px-2.5 p-1 rounded-full"
          data-aos="flip-right"
        >
          View Project
        </button>
      </a>
    </div>
  );
};
