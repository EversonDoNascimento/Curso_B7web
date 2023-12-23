import "./App.css";
import { ProviderPhrase } from "./UseContextPhrases/ContextPhrases";
import { InputPhrases } from "./components/inputPhrases";
import ListPhrases from "./components/listPhrases";
import { LoadData } from "./components/loadData";

function App() {
  // const [d, setD] = useState<phraseType[]>([{ id: 0, author: "", phrase: "" }]);
  // const data = async () => {
  //   try {
  //     const response = await api.get("/phrases");
  //     setD(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   data();
  // }, []);

  return (
    <div>
      <ProviderPhrase>
        <InputPhrases></InputPhrases>
        <br></br>
        <ListPhrases></ListPhrases>
      </ProviderPhrase>
    </div>
  );
}

export default App;
