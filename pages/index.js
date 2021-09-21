import HomePage from "../Src/view/HomePage/HomePage";
import Link from "next/link"

export default function Home({ products }) {
  return (
    <div>
      this is home page
      <Link href="/posts">
        <p>Posts</p>
      </Link>
      <HomePage products={products} />
      {/* {
        products.map(product => (
         <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
         </>
        ))
      } */}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};
