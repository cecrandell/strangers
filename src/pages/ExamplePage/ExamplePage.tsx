import {
  IonContent,
  IonMenuButton,
  IonPage,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { useParams } from "react-router";
import { example } from "../JSON/sample";
import crayonimage from "../images/crayon.png";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  let chosen = [];
  let game = example;

  for (let i = 0; i < game.length; i++) {
    if (game[i].deck === name) {
      chosen.push(game[i]);
    }
  }

  return (
    <IonPage>
      <IonFab vertical="top" horizontal="start" slot="fixed">
        <IonFabButton>
          <IonMenuButton />
        </IonFabButton>
      </IonFab>
      <IonContent fullscreen>
        <IonGrid>
          <div className="container">
            <IonSlides key={chosen.map((card) => card.card_content).join("_")}>
              {chosen.map((card, index) => {
                return (
                  <IonSlide key={index}>
                    <IonCard className={card.card_color}>
                      <IonRow id="level" className="ion-justify-content-center">
                        <IonCardSubtitle className={card.text_color}>
                          {card.level === "" ? "" : "LEVEL " + card.level}
                          {card.level_name === "SWIPE TO GET STARTED" ? (
                            <div>
                              <img
                                alt=""
                                className="crayon-image"
                                src={crayonimage}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </IonCardSubtitle>
                      </IonRow>
                      <IonRow
                        id="message"
                        className="ion-justify-content-center ion-align-self-center"
                      >
                        <IonCardTitle className={card.text_color}>
                          {card.card_content}
                        </IonCardTitle>
                      </IonRow>
                      <IonRow id="deck" className="ion-justify-content-center">
                        <IonCardSubtitle className={card.text_color}>
                          {card.level_name === "SWIPE TO GET STARTED" ? (
                            <div>
                              <img
                                alt=""
                                className="crayon-image"
                                src={crayonimage}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <div>WE'RE NOT REALLY STRANGERS</div>
                        </IonCardSubtitle>
                      </IonRow>
                    </IonCard>
                  </IonSlide>
                );
              })}
            </IonSlides>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;
