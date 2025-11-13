
function Topics(){
function handleClick() {
    console.log('Button click ...');
  }
return (
    <div>
      <button type="button" onClick={handleClick()}>
        Select by Topics
      </button>
    </div>
  );

}


export default Topics