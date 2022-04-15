import PageWithTabs from "../components/PagesWithTabs/PageWithTabs";
import data_about from "../src/data_about";
import getImages from "../lib/GetImages";

export default function about({ data }) {
  const images = getImages();

  return <PageWithTabs page={data} album={images} />;
}

export async function getStaticProps() {
  const data = data_about[0];
  return {
    props: {
      data,
    },
  };
}
