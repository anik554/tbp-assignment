import Hero from "@/components/home/Hero";
import PopularPackage from "@/components/home/PopularPackage";
import SearchBar from "@/components/home/SearchBar";

export default function Home() {
  return (
    <main className="container mx-auto max-w-10/12 mt-12">
      <section>
        <Hero />
      </section>
      <section>
        <SearchBar />
      </section>
      <section className="mb-10">
        <PopularPackage />
      </section>
    </main>
  );
}
