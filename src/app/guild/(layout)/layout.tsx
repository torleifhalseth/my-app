export const metadata = {
  title: "Pokemon",
  description: "Gotta Catch 'Em All!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6 md:px-10 lg:px-20">
      {children}
    </div>
  );
}
