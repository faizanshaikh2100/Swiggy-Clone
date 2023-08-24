import Card from "./Card";
function Image({ item, isImage }) {
  return (
    <div>
      {isImage ? (
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      ) : (
        <div>
          <div className="w-[300px]">
            <Card item={item} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Image;
