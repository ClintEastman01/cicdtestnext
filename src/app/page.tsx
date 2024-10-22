export default function Home() {
  const names = ["clint", "ken", "john"];
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to a test page</h1>
      {names.map((name, index) => (
        <p key={`name-${index}`}>{name}</p>
      ))}
    </>
  );
}
