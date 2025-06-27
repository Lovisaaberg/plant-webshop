import { ProductCard } from "./ProductCard";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";

export const ProductsSection = ({ title = "Our Plants" }) => {
  const [plants, setPlants] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        setError(error.message);
      } else {
        setPlants(data || []);
        setAllPlants(data || []);
      }
    } catch (error) {
      console.error(error);
      setError("Something happened loading plants");
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (searchTerm) => {
    const filtered = allPlants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPlants(filtered);

    if (filtered.length === 0) {
      setSearchError("Inga växter hittades.");
    } else {
      setSearchError(null);
    }
  };

  if (loading) return <p>Loading plants...</p>;
  if (error) return <p>Error loading plants: {error}</p>;

  return (
    <section
      className="
    mt-[68px]
    md:px-[20px]"
    >
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-[30px]">
        {title}
      </h2>
      <input
        type="text"
        placeholder="Search plants..."
        className="mb-[20px] p-2 border border-gray-300 rounded w-3/5 md:w-1/3"
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchError && <p className="text-black text-2xl">{searchError}</p>}

      <div
        className="
          grid 
          grid-cols-2
          md:grid-cols-3 
          xl:grid-cols-4 
          gap-[40px] 
          max-w-[1260px] 
          mx-auto 
          px-[30px]"
      >
        {plants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
