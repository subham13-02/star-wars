import { setModal } from "../../store/modal/action";
import "./dropdown.css";
import { useDispatch } from "react-redux";

function DropDown() {
  const disPatch = useDispatch();

  return (
    <div className="dd">
      <button>
        <img src="./view.png" />
        <p>View</p>
      </button>
      <button>
        <img src="./download.png" />
        <p>Download</p>
      </button>
      <button>
        <img src="./rename.png" />
        <p>Rename</p>
      </button>
      <button>
        <img src="./share.png" />
        <p>Share Link</p>
      </button>
      <button>
        <img src="./move.png" />
        <p>Move</p>
      </button>
      <button>
        <img src="./markprivate.png" />
        <p>Mark Private</p>
      </button>
      <button>
        <img src="./delete.png" />
        <p
          className="del"
          onClick={() => {
            disPatch(setModal(true));
          }}
        >
          Delete
        </p>
      </button>
    </div>
  );
}

export default DropDown;
