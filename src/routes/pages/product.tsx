import { useParams } from "react-router";

export function ProductPage() {
  const params = useParams();
  console.log("🚀 ~ ProductPage ~ params:", params);

  return (
    <div className="flex items-center justify-center bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Product Page</h1>
    </div>
  );
}
