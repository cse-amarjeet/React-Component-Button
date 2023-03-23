import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          className="mb-5"
          secondary
          outline
          rounded
          onClick={() => {
            console.log("clicked!!");
          }}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload /> hello
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          See Database
        </Button>
      </div>
      <div>
        <Button warning>hello22</Button>
      </div>
      <div>
        <Button danger>hello33</Button>
      </div>
      <div>
        <Button>hello44</Button>
      </div>
    </div>
  );
}
export default ButtonPage;
