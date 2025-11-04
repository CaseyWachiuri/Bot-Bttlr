function Header({ text }) {
  return(
    <>
      <div className="bg-gray-200 rounded flex justify-center h-6 items-center m-2">
        <h1>
          { text } {/* Try saying it 10x fast */}
        </h1>
      </div>
    </>
  );
}

export default Header;
