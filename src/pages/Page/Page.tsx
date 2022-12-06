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
import {
  gameanxious,
  gamebacktoschool,
  gamebreakup,
  gamecann,
  gamecouples,
  gameexfriend,
  gamefamily,
  gameforgiveness,
  gamefriendship,
  gamehealing,
  gamehonestdating,
  gamenye,
  gameoriginal,
  gamequarantine,
  gameraceandprivilege,
  gamerelationship,
  gameselflove,
  gameselfreflection,
  gamesneakylink,
  gamethanksgiving,
  gamevoting,
  gamexbumble,
  gamexbumblebff,
  gamexbumblebizz,
  gamexdvf,
  gamexhbomax,
  gamexredtabletalk,
  gamexvalentino,
} from "../JSON/wnrs";
import votingimage from "../images/voting.png";
import crayonimage from "../images/crayon.png";
import thanksgivingimage from "../images/thanksgiving.png";
import hbomaximage from "../images/hbo-max.png";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  let chosen = [];
  let bottomtext = "WE'RE NOT REALLY STRANGERS";
  let game = gameoriginal;
  switch (name) {
    case "original":
      game = gameoriginal;
      bottomtext = "WE'RE NOT REALLY STRANGERS";
      break;
    case "anxious":
      game = gameanxious;
      break;
    case "back-to-school":
      game = gamebacktoschool;
      break;
    case "breakup":
      game = gamebreakup;
      break;
    case "cann":
      game = gamecann;
      break;
    case "couples":
      game = gamecouples;
      break;
    case "ex-friend":
      game = gameexfriend;
      break;
    case "family":
      game = gamefamily;
      break;
    case "forgiveness":
      game = gameforgiveness;
      break;
    case "friendship":
      game = gamefriendship;
      break;
    case "healing":
      game = gamehealing;
      break;
    case "honest-dating":
      game = gamehonestdating;
      break;
    case "new-years-eve":
      game = gamenye;
      break;
    case "quarantine":
      game = gamequarantine;
      break;
    case "race-and-privilege":
      game = gameraceandprivilege;
      break;
    case "relationship":
      game = gamerelationship;
      break;
    case "self-love":
      game = gameselflove;
      break;
    case "self-reflection":
      game = gameselfreflection;
      break;
    case "sneaky-link":
      game = gamesneakylink;
      break;
    case "thanksgiving":
      game = gamethanksgiving;
      break;
    case "voting":
      game = gamevoting;
      break;
    case "x-bumble":
      game = gamexbumble;
      break;
    case "x-bumble-bff":
      game = gamexbumblebff;
      break;
    case "x-bumble-bizz":
      game = gamexbumblebizz;
      break;
    case "x-dvf":
      game = gamexdvf;
      break;
    case "x-hbo-max":
      game = gamexhbomax;
      break;
    case "x-red-table-talk":
      game = gamexredtabletalk;
      break;
    case "x-valentino":
      game = gamexvalentino;
      break;
  }

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
                          {card.level_name === "voting" ? (
                            <img
                              alt=""
                              className="voting-image"
                              src={votingimage}
                            />
                          ) : (
                            ""
                          )}
                          {card.level_name !== "voting" &&
                          card.deck !== "x-hbo-max" &&
                          card.level_name !== "" &&
                          card.level_name !== "SWIPE TO GET STARTED"
                            ? "\n" + card.level_name.toUpperCase()
                            : ""}

                          {card.deck === "thanksgiving" &&
                          card.level_name === "" ? (
                            <img
                              alt=""
                              className="thanksgiving-image"
                              src={thanksgivingimage}
                            />
                          ) : (
                            ""
                          )}
                          {card.deck === "x-hbo-max" &&
                          card.level_name !== "SWIPE TO GET STARTED" ? (
                            <img
                              alt=""
                              className="hbo-max-image"
                              src={hbomaximage}
                            />
                          ) : (
                            ""
                          )}
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
                          <div>
                            {card.deck !== "original" &&
                            card.level_name === "SWIPE TO GET STARTED"
                              ? `${bottomtext} ${name
                                  .split("-")
                                  .join(" ")
                                  .toUpperCase()} ${card.pack_type.toUpperCase()}`
                              : `${bottomtext}`}
                            {card.deck === "x-hbo-max" &&
                            card.level_name !== "SWIPE TO GET STARTED" ? (
                              <div>
                                INSPIRED BY MAX ORIGINAL{" "}
                                <i>{card.level_name.toUpperCase()}</i>
                              </div>
                            ) : (
                              ""
                            )}
                            {card.deck !== "x-hbo-max" &&
                            card.level_name !== "SWIPE TO GET STARTED" &&
                            card.deck !== "original" ? (
                              <div>
                                {name.split("-").join(" ").toUpperCase()}{" "}
                                {card.pack_type.toUpperCase()}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
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
