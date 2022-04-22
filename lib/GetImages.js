import { useRouter } from "next/router";

export default function GetImages() {
  const router = useRouter();

  let images;

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  switch (router.pathname) {
    case "/about":
      images = importAll(
        require.context(
          "/public/images/我來領唱",
          false,
          /\.jpg$|\.png$|\.webp$/
        )
      );
      break;

    case "/site":
      images = importAll(
        require.context(
          "/public/images/卡那歲場地介紹照片",
          false,
          /\.jpg$|\.png$|\.webp$/
        )
      );
      break;

    case "/transportation":
      images = importAll(
        require.context(
          "/public/images/交通資訊",
          false,
          /\.jpg$|\.png$|\.webp$/
        )
      );
      break;

    case "/cast":
      images = importAll(
        require.context(
          "/public/images/演出陣容",
          false,
          /\.jpg$|\.png$|\.webp$/
        )
      );
      break;

    case "/mini-market":
      images = importAll(
        require.context(
          "/public/images/mini市集",
          true,
          /\.jpg$|\.png$|\.webp$|\.jpeg$/
        )
      );
      break;

    default:
      console.log(router);
  }

  return images;
}
