import { FC } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ fileUrl }) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, ZoomPopover } = zoomPluginInstance;
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    CurrentPageInput,
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage,
    NumberOfPages,
  } = pageNavigationPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;
  return (
    <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
      <div className="flex justify-around w-[1200px]">
        <div className="flex">
          <ZoomOut />
          <ZoomPopover />
          <ZoomIn />
        </div>
        <div className="flex">
          <GoToFirstPage />

          <GoToPreviousPage />
          <CurrentPageInput />
          <div className="my-auto text-xl">
            {"/"}
            <NumberOfPages />
          </div>
          <GoToNextPage />
          <GoToLastPage />
        </div>

        <EnterFullScreen />
      </div>
      <div className="h-[750px] w-[1200px]">
        <Viewer
          fileUrl={fileUrl}
          plugins={[
            zoomPluginInstance,
            pageNavigationPluginInstance,
            fullScreenPluginInstance,
          ]}
          theme="dark"
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
