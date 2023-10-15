import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-sm:hidden" />
        <h1 className="orange_gradient text-center">AI-generated prompts</h1>
      </h1>
      <p className="desc text-center">
        Explore a collection of imaginative and visually stunning prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
