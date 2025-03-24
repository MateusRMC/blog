import Link from "next/link"; 

export default function ListaDePosts({data}) {
  return (
    <>
      {data
      .slice()
      .sort((a,b) => b.id - a.id)
      .map(post=>
      <div className="innerdiv" key={post.id}>
        <Link href="/">{post.titulo}</Link>
        </div>
      )}
    </>
  );
}
