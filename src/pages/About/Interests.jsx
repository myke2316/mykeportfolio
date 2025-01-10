

const Interests = ({ icon, value }) => {
  return (
    <>
      <div className="flex gap-2 p-4 m-2  border border-1">
        <h1>{icon}</h1>
        <p className="text-xl">{value}</p>
      </div>
   
    </>
  );
};
export default Interests;
