import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { RoomMontagne } from "./components/RoomMontagne";
import { RoomJardin } from "./components/RoomJardin";
import { RoomPrairie } from "./components/RoomPrairie";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "chambre-orchidee", Component: RoomJardin },
      { path: "chambre-eperviere", Component: RoomMontagne },
      { path: "chambre-gentiane", Component: RoomPrairie },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
