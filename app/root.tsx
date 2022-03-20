// root.tsx
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import globalCss from "~/styles/index.css";
import { ServerStyleContext, ClientStyleContext } from "./context";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import BottomSheet from "./components/BottomSheet";

interface DocumentProps {
  children: React.ReactNode;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCss,
    },
  ];
};

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverSyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstaticom" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <Meta />
          <Links />
          {serverSyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Box bg={"gray.50"}>
          <Navbar />
          <Box as="main" py={"20"}>
            <Container maxW={"container.lg"}>
              <Outlet />
            </Container>
          </Box>
          <Box display={["block", "none"]}>
            <BottomSheet />
          </Box>
        </Box>
      </ChakraProvider>
    </Document>
  );
}
