export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Dynamic: {Math.random()}</p>
      {children}
    </div>
  );
}
