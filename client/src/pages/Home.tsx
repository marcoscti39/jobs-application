import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col gap-4 max-w-[600px] mx-auto mt-12">
      <h1 className="text-4xl">
        Register your jobs with <span className="font-semibold">Jobs</span>
        <span className="font-semibold text-purple-400">App</span>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        tenetur debitis delectus corporis nam commodi eaque inventore illo odio,
        magni nostrum eius earum consequatur dignissimos temporibus provident
        maxime facilis possimus.
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        iste accusamus quis suscipit porro praesentium molestiae nesciunt
        cumque, laudantium hic consequuntur! Recusandae porro at aperiam ut unde
        illum, voluptatem deleniti!
      </p>

      <Link
        to="/login"
        className="bg-purple-600 w-[max-content] rounded px-4 py-2 font-semibold text-white"
      >
        Login
      </Link>
    </section>
  );
};

export default Home;
