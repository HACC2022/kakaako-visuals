export default function ({displayData}) {
  return (
    <div className="px-4 py-4 border-t ">
      <h2 className="font-bold">Notes</h2>
      {displayData.notes}
    </div>
  );
}
