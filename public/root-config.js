import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app1",
  app: () => import("app1"),
  activeWhen: ["/app/spas"],
});

registerApplication({
  name: "app2",
  app: () => import("app2"),
});

start({ urlRerouteOnly: true });
