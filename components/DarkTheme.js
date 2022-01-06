const DarkTheme = () => {
  return (
    <style jsx global>{`
      /* Dark Mode */
      :root {
        --background-color: rgb(14, 14, 14);
        --text-color: rgb(230, 230, 230);
        --link-color: rgb(234, 207, 3);
      }
    `}</style>
  );
};

export default DarkTheme;
