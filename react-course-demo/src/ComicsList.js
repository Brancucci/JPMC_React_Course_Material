import React from 'react';
const styles = {
 comicsList: {
  display: 'flex',
  flexWrap: 'wrap',
 },
 comicCard: {
  width: '200px',
  margin: '10px'
 },
 description: {
 },
}

export const ComicsList = ({ comicList = [], searchString, fetchingComics }) => {
 if (fetchingComics !== "RESOLVED")  return null;
 return (
  <section style={styles.comicsList}>
   { comicList.length === 0 &&  <p className="alert alert-danger">There's no comic book that contains {searchString}.</p>}
   {comicList.map(comic => <Comic comic={comic} />)}
  </section>
 )
};

export const Comic = ({ comic }) => {
 console.log(comic);
 const { dates, description, issueNumber, thumbnail, title } = comic || {};
 const { path, extension } = thumbnail || {};
 const coverImage = `${path}/portrait_fantastic.${extension}`;
 let onsaledate;
 try {
  const onsaleDateObj = dates.find(obj => obj.type === 'onsaleDate');
  onsaledate = new Date(onsaleDateObj.date).toLocaleDateString();
 } catch { }
 return (
  <section className="card" style={styles.comicCard}>
   <img src={coverImage} alt="Cover here" className="card-image-top" />
   <h5 className="card-title">{title} #{issueNumber}</h5>
   <p>Date: {onsaledate}</p>
   <p className="card-text" style={styles.description}>{description}</p>
  </section>
 )
};