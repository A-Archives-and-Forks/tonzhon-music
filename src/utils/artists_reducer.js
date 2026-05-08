function artistsReducer(artists) {
  return (
    artists.length > 0 &&
    artists.map(artist => artist.name)
      .reduce((accumulator, currentValue) =>
        accumulator + ', ' + currentValue
      )
  );
}

export default artistsReducer;