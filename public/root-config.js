import ListApps from "list-apps";
import { registerApplication, start } from "single-spa";

if (Array.isArray(ListApps)) {
  ListApps.forEach(({ name, activeWhen }) => {
    registerApplication({
      name: name,
      app: () => import(name),
      activeWhen: activeWhen,
    });
  });
}

start({ urlRerouteOnly: true });
