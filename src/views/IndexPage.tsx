import { useAppStore } from "../stores/useAppStore";

const IndexPage = () => {
  const recipe = useAppStore((state) =>state.categories) 

  return (
    <>
      <h1>Index : {recipe}</h1>
    </>
  );
};

export default IndexPage;
