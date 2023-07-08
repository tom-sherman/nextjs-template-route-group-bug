import Link from "next/link";

export default function Page({ params }: { params: { x: string } }) {
  return (
    <div>
      dynamic page {params.x}{" "}
      <Link href={`/dynamic/${Math.random()}`}>Navigate</Link>
    </div>
  );
}
