import DetailProduct from "@/components/DetailProduct";
import NavBar from "@/components/NavBar";

export default function ProductPage({ params: { id } }) {
  console.log(id);
  return (
    <div className="bg-white">
      <NavBar />
      <DetailProduct productId={id} />
    </div>
  );
}
