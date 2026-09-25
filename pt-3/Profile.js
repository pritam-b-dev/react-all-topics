export default function Profile({
  name,
  image,
  profession,
  awards,
  discovered,
}) {
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
