import { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditMeme = () => {
  const [params] = useSearchParams();
  const url = params.get("url");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  
  const memeRef = createRef();
  
  const handleText = () => {
    setCount(count + 1);
  };
  
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="border-y-2 border-gray-500 mt-2 h-screen">
      <div className="flex flex-col gap-2 md:flex-row md:gap-20  mt-10 ml-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-5">
            <div ref={memeRef} className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
              <img className="w-full max-w-lg z-0" src={url} alt="Meme" />
              <ul className="render-text z-2 ">
                {Array(count)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <Text color={color}/>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <button onClick={handleText} className="border-2 bg-yellow-500 rounded-md text-gray-200 text-xl px-5 py-2 hover:bg-yellow-400">
                Add Text
              </button>
              <label className="text-xl text-white flex justify-center items-center gap-2 border-2 bg-yellow-500 p-2 rounded-lg cursor-pointer">
                Change Color
                <input
                  onChange={handleColorChange}
                  className="bg-yellow-500 h-8 w-8"
                  type="color"
                  placeholder="Text Color"
                />
              </label>
              <button onClick={() => exportComponentAsJPEG(memeRef)} className="border-2 bg-yellow-500 rounded-md text-gray-200 text-xl px-5 py-2 hover:bg-yellow-400">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMeme;
