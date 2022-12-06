import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import { heartOutline, heartSharp } from "ionicons/icons";

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "original",
    url: "/page/original",
  },
  {
    title: "anxious",
    url: "/page/anxious",
  },
  {
    title: "back to school",
    url: "/page/back-to-school",
  },
  {
    title: "breakup",
    url: "/page/breakup",
  },
  {
    title: "cann",
    url: "/page/cann",
  },
  {
    title: "couples",
    url: "/page/couples",
  },
  {
    title: "ex-friend",
    url: "/page/ex-friend",
  },
  {
    title: "family",
    url: "/page/family",
  },
  {
    title: "forgiveness",
    url: "/page/forgiveness",
  },
  {
    title: "friendship",
    url: "/page/friendship",
  },
  {
    title: "healing",
    url: "/page/healing",
  },
  {
    title: "honest dating",
    url: "/page/honest-dating",
  },
  {
    title: "new years eve",
    url: "/page/new-years-eve",
  },
  {
    title: "quarantine",
    url: "/page/quarantine",
  },
  {
    title: "race and privilege",
    url: "/page/race-and-privilege",
  },
  {
    title: "relationship",
    url: "/page/relationship",
  },
  {
    title: "self-love",
    url: "/page/self-love",
  },
  {
    title: "self-reflection",
    url: "/page/self-reflection",
  },
  {
    title: "sneaky-link",
    url: "/page/sneaky-link",
  },
  {
    title: "thanksgiving",
    url: "/page/thanksgiving",
  },
  {
    title: "voting",
    url: "/page/voting",
  },
  {
    title: "x bumble",
    url: "/page/x-bumble",
  },
  {
    title: "x bumble bff",
    url: "/page/x-bumble-bff",
  },
  {
    title: "x bumble bizz",
    url: "/page/x-bumble-bizz",
  },
  {
    title: "x dvf",
    url: "/page/x-dvf",
  },
  {
    title: "x hbo max",
    url: "/page/x-hbo-max",
  },
  {
    title: "x red table talk",
    url: "/page/x-red-table-talk",
  },
  {
    title: "x valentino",
    url: "/page/x-valentino",
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={heartOutline} md={heartSharp} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
