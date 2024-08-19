const PrevNextButtons = ({ setCurrentUrl, prevNext, refreshList }) => {
    const handlePrev = () => {
      if (prevNext.previous) {
        setCurrentUrl(prevNext.previous);
        refreshList();
      }
    };
  
    const handleNext = () => {
      if (prevNext.next) {
        setCurrentUrl(prevNext.next);
        refreshList();
      }
    };
  
    return (
      <div className="flex w-5/6 mt-10 justify-between">
        <button 
          onClick={handlePrev} 
          className="bg-yellow-400 text-blue-600 font-bold px-10 py-1 rounded-lg shadow-lg hover:bg-yellow-300"
          disabled={!prevNext.previous}
        >
          Prev
        </button>
        <button 
          onClick={handleNext} 
          className="bg-yellow-400 text-blue-600 font-bold px-10 py-1 rounded-lg shadow-lg hover:bg-yellow-300"
          disabled={!prevNext.next}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default PrevNextButtons;
  