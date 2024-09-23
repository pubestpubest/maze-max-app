import "@mantine/core/styles.css";
import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
const myColor: MantineColorsTuple = [
  "#fff0e4",
  "#ffe0cf",
  "#fac0a1",
  "#f69e6e",
  "#f28043",
  "#f06d27",
  "#f06418",
  "#d6530c",
  "#bf4906",
  "#a73c00",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
