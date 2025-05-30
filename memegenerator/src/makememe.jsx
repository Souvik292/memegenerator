import React, { useRef ,useState} from 'react';
import html2canvas from 'html2canvas';
import Header1 from './header1';




function MemeGenerator() {


  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

   const combinedRef = useRef();

  



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };
  const handleImageUpload2 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage1(reader.result);
    if (file) reader.readAsDataURL(file);
  };


 const downloadCombinedMeme = async () => {
  const canvas = await html2canvas(combinedRef.current);
  const link = document.createElement('a');
  link.download = 'combined-meme.png';
  link.href = canvas.toDataURL();
  link.click();
};


  return (
    <>

    <Header1/>
    <section className="min-h-screen font-serif bg-red-200 p-6">
      <h1 className="text-3xl font-bold italic  text-center mb-6"> Meme Editor</h1>

      <section className="flex flex-col items-center pt-8 pb-8 space-y-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input type="file" accept="image/*" onChange={handleImageUpload2} />
        
           <input
          type="text"
          placeholder="Top Text"
          className="px-4 py-2 border rounded w-64"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
       
       
        <input
          type="text"
          placeholder="Bottom Text"
          className="px-4 py-2 border rounded w-64"
           
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
       
      <section
        ref={combinedRef}
        className="bg-white p-4 space-y-4 border border-gray-300 rounded-md"
      >
        {image && (
          <section
          
            className="relative w-full  justify-around items-center max-w-md border border-gray-300 shadow-lg"
          >
             <section className="absolute  bg-white text-center w-full  text-black-200  font-bold text-xl drop-shadow-md" >
              {topText}
            </section>
            <img src={image} alt="meme2" className="w-full contain" />
            
           
           
           </section>
        )}
      
        {image1 && (
          <section
           
            className="relative top-2  w-full max-w-md border border-gray-300 shadow-lg"
          >
              
            <img src={image1} alt="meme1" className="w-full" />
            
            <section className="absolute bg-white text-center w-full bottom-1 text-black-200 font-bold text-xl drop-shadow-md">
              {bottomText}
             </section>
           </section>
        )}
      
    </section>
      

        {image && (
          <button
            onClick={downloadCombinedMeme}
            className="bg-black text-white px-4 py-2 rounded hover:bg-black-700"
          >
            Download Meme
          </button>
        )}
      </section>
    </section>
    </>
  );
 
  
};

export default MemeGenerator;


