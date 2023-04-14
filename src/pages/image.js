import React from 'react';

const TextToImage = ({ text }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 700;
    canvas.height = 350;

    // Set background color
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties
    const fontSize = Math.floor(canvas.width / text.length);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Convert canvas to blob
    canvas.toBlob((blob) => {
      // Create download link
      const link = document.createElement('a');
      link.download = `${text}.png`;
      link.href = URL.createObjectURL(blob);

      // Click the download link
      link.click();

      // Clean up
      URL.revokeObjectURL(link.href);
    });
  }, [text]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
};

const ImagePage = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryText = urlParams.get('text');
    if (queryText) {
      setText(queryText);
    }
  }, []);

  return (
    <div>
      {text ? <TextToImage text={text} /> : <p>No text provided.</p>}
    </div>
  );
};

export default ImagePage;
