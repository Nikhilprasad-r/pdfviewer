"use client";
import PDFViewer from "@/components/PDFViewer";

export default function Home() {
  const fileUrl =
    "https://ed-india.s3.ap-south-1.amazonaws.com/course/content/be2d5fa2-77b2-459d-bdc1-4b31c8c47dd5.pdf";
  return (
    <main className="">
      <PDFViewer fileUrl={fileUrl} />
    </main>
  );
}
