import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import useWindowStore from "@store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;
    if (!data) return null;
    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                <div className="flex items-center justify-center w-full h-full">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="max-w-full max-h-[70vh] object-contain"
                    />
                </div>
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
