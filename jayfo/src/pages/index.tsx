import Link from "next/link";
import { GetStaticProps } from "next";
import Topbanner from "@/components/Topbanner";
import { client } from "@/lib/client";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";


export default function Home({ data, product }: string | object) {
  console.log(product);

  const products = data.map((product: string | object) => (
    <ProductCard item={product} />
  ));

  return (
    <>
      <Topbanner />

      <div className="h-32 w-10/12 md:w-1/2 m-auto bg-white flex flex-col justify-center items-center gap-1 shadow my-4 rounded-lg ">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 w-9/12 outline-0 rounded "
        />

        <div>
          <button className=" border-0 shadow-lg px-8 py-2 bg-gray-700 hover:bg-white hover:text-gray-500 rounded font-bold text-white">
            Search
          </button>
        </div>
      </div>
      {/* <Sidebar /> */}
      <h2 className="text-4xl font-bold">Top deals</h2>
      <div className="w-10/12 m-auto grid grid-cols-fluid gap-4 my-4">
        {products}
      </div>
     
      <section className="grid grid-cols-fluids p-4 gap-4">
        <Link href='/stores?category=electronics' className="hover:scale-105 transition ease-in-out 1s">
          <div className="flex items-center justify-center bg-[url('/g.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
          <h2 className="text-white text-2xl font-semibold">Electronics</h2>
        </div>
        </Link>
        <Link href='/stores?category=furniture' className="hover:scale-105 transition ease-in-out 1s">
        <div className="flex items-center justify-center bg-[url('/h.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
          <h2 className="text-white text-2xl font-semibold">Furniture</h2>
        </div>
        </Link>
        <Link href='/stores?category=kitchen' className="hover:scale-105 transition ease-in-out 1s">
        <div className="flex items-center justify-center bg-[url('/d.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
          <h2 className="text-white text-2xl font-semibold">Kitchen</h2>
        </div>
        </Link>
        <Link href='/stores?category=beddings' className="hover:scale-105 transition ease-in-out 1s">
        <div className="flex items-center justify-center bg-[url('/a.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
          <h2 className="text-white text-2xl font-semibold">Beddings</h2>
        </div>
        </Link>
        <Link href='/stores?category=curtains' className="hover:scale-105 transition ease-in-out 1s">
        <div className="flex items-center justify-center bg-[url('/i.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
          <h2 className="text-white text-2xl font-semibold">Curtains</h2>
        </div>
        </Link>
      </section>
      <section>

      <div className="text-blue-950 h-72 m-4 bg-[url('/banner.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-white/50 flex flex-col justify-center items-center gap-2 shadow my-4 rounded-lg  ">
   <h2 className="text-xl font-semibold ">Get notified of our new product</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="border p-3 w-9/12 md:w-1/2 outline-0 rounded "
        />

        <div>
          <button className=" border-0 shadow-lg px-8 py-2 bg-gray-700 hover:bg-white hover:text-gray-500 rounded font-bold text-white">
            Join
          </button>
        </div>
      </div>
      </section>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type=="deals"]';
  const productQuery = '*[_type=="product"]';
  const data = await client.fetch(query);
  const product = await client.fetch(productQuery);

  return {
    props: { data, product },
  };
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
