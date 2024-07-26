import Button from "./Button";

function DownloadButton({ url }) {
  const downloadFile = () => {
    window.location.href = url;
  };
  return (
    <Button onClick={downloadFile} variation="primary" size="medium">
      Download
    </Button>
  );
}

export default DownloadButton;
