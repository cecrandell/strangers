import {
  IonContent,
  IonMenuButton,
  IonPage,
  IonFab,
  IonFabButton,
  IonRow,
  IonGrid,
} from "@ionic/react";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="top" horizontal="start" slot="fixed">
        <IonFabButton className="homescreen-button">
          <IonMenuButton className="homescreen-menu" />
        </IonFabButton>
      </IonFab>
      <IonContent className="homescreen" fullscreen>
        <IonGrid>
          <div className="container">
            <IonRow className="first-row ion-justify-content-center ion-align-self-center">
              COME CURIOUS
            </IonRow>
            <IonRow className="main-row ion-justify-content-center ion-align-self-center">
              WE'RE NOT REALLY STRANGERS
            </IonRow>
            <IonRow className="second-row ion-justify-content-center ion-align-self-center">
              LEAVE CONNECTED
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
