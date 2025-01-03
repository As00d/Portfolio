function NavbarLinks({ link }) {
  const { id, url, text } = link;
  return (
    <li className="pb-1 md:hover:text-[#42b4ff]">
      <a href={url} target="_blank">
        {text}
      </a>
    </li>
  );
}

export default NavbarLinks;
