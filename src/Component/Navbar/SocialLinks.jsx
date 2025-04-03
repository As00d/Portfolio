const SocialLinks = ({ link }) => {
  const { id, url, icon } = link;
  return (
    <li className="pb-1 md:hover:text-[#42b4ff]">
      <a href={url} target="_blank">
        {icon}
      </a>
    </li>
  );
};
export default SocialLinks;
