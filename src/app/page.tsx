import Link from "next/link";

export default function Home() {
  return (
    <div>
      Please go to the catalog page to see the products - <Link href="/catalog">Catalog</Link>
    </div>
  );
}
