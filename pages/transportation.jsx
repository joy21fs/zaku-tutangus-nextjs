import PageWithTabs from "../components/PagesWithTabs/PageWithTabs";
import data_transportation from "../src/data_transportation";
import getImages from "../lib/GetImages";

export default function transportation({ data }) {
  const images = getImages();
  return (
    <>
      <PageWithTabs page={data} album={images} />
    </>
  );
}
export async function getStaticProps() {
  const data = data_transportation[0];
  return {
    props: {
      data,
    },
  };
}
