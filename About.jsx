import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">About Xamizi</h2>
        <p className="mt-2 text-gray-600">
          Xamizi helps people find affordable rooms near them.
        </p>
      </div>
    </>
  );
}
