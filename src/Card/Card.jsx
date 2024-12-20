import style from "./Card.module.css";
function Card(prop) {
  let imgUrl = null;
  let kamenriderName = null;
  let kmDescription = null;
  const cardClick = (cardname) => alert(cardname);
  switch (prop.name) {
    case "ace":
      imgUrl = "https://m.media-amazon.com/images/M/MV5BYzk3M2I1MGEtMDU2Ni00NDNjLWI2ZTEtMjM4NzNkNjQ3NmIwXkEyXkFqcGc@._V1_.jpg";
      kamenriderName = "Ukiyo Ace";
      kmDescription = `Ace Ukiyo (浮世 英寿, Ukiyo Ēsu) is the main protagonist of Kamen Rider Geats. As the current modern-day reincarnation of Ace (エース, Ēsu)`;
      break;
    case "neon":
      imgUrl = "https://tamashiiweb.com/images/item/item_0000014340_BXt8K1sT_01.jpg";
      kamenriderName = "Neon Kurama";
      kmDescription = `Neon Kurama (鞍馬 祢音, Kurama Neon) is one of the main characters in Kamen Rider Geats. She transforms into Kamen Rider Nago and participates in the Desire Grand Prix.`;
      break;
    case "buffa":
      imgUrl = "https://pbs.twimg.com/media/FqhSfOzaUAEV4C6.jpg:large";
      kamenriderName = "Michinaga Azuma";
      kmDescription = `Michinaga Azuma (吾妻 道長, Azuma Michinaga) is another key character in Kamen Rider Geats. He transforms into Kamen Rider Buffa and has a rivalry with Ace Ukiyo.`;
      break;
    case "tycoon":
      imgUrl = "https://tamashiiweb.com/images/item/item_0000015031_ZADFyxlu_01.jpg";
      kamenriderName = "Keiwa Sakurai";
      kmDescription = `Keiwa Sakurai (桜井 景和, Sakurai Keiwa) is one of the main Riders in Kamen Rider Geats. He transforms into Kamen Rider Tycoon and joins the Desire Grand Prix with a hopeful and kind-hearted spirit.`;
      break;
    default:
      imgUrl = "";
      kamenriderName = "Unknown";
      kmDescription = "No information available for this Kamen Rider.";
      break;
  }

  return (
    <div className={style.card} onClick={() => cardClick(kamenriderName)}>
      <img height="150px" src={imgUrl} alt="" />
      <p className={style.name}>{kamenriderName}</p>
      <br />
      <p>{kmDescription}</p>
    </div>
  );
}
export default Card;
