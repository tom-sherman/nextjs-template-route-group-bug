export const dynamic = "force-dynamic";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>nested - {Math.random()}</p>
      {children}
    </>
  );
}
