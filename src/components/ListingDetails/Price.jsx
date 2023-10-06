function Price({ price }) {
  return (
    <div>
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-700">NOK {price}</p>
    </div>
  );
}
export default Price;
