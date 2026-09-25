function getImageUrl(imageId, size = "s") {
  return "https://react.dev/images/docs/scientists/" + imageId + size + ".jpg";
}

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        image={getImageUrl("szV5sdG")}
        profession={"physicist and chemist"}
        awards={{
          total: 4,
          awards:
            "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
        }}
        discovered={"polonium (chemical element)"}
      />
      <Profile
        name={"Katsuko Saruhashi"}
        image={getImageUrl("YfeOqp2")}
        profession={"geochemist"}
        awards={{
          total: 2,
          awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
        }}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}

function Profile({ name, image, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={image} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.total} </b>
          {awards.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Gallery />);
