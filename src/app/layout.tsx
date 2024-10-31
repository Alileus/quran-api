export const metadata = {
  title: "QANUN APIs",
  description: "QANUN APIs",
};

type Props = {
  children: React.ReactNode;
};
const LayoutRoot = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default LayoutRoot;
