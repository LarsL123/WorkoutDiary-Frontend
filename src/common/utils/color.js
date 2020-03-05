const getRandomColor = () => {
    return (
      "#" + Math.max(Math.floor(Math.random() * 0x1000000), 0x100000).toString(16)
    );
  };

export default getRandomColor;