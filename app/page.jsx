import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover &amp; Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptsHub is an AI Prompting tool for the modern world to discover,
        create and share creative prompts
      </p>
      {/* FEED component */}
      <Feed />
    </section>
  );
};

export default Home;
