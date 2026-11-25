import Link from "next/link";
export default function Home() {
return (
<main className="p-8">
<h1 className="text-3xl font-bold">
Hi, I&apos;m Lawrence Caycay
</h1>
<p className="mt-2">
Welcome to my home page.
</p>
<Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>

</main>

);
}

