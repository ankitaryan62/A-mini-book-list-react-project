import React from 'react';
import ReactDom from 'react-dom';



function BookList() {
  return (
  <section>
    <Book/>
  </section>)
}  
    const Book = () =>{
      return (
      <article> 
        <Image></Image>
        <Title/>
        <Author/>

      </article>
      );
};

const Image = () => (
  <img
  src = 'https://m.media-amazon.com/images/I/711hfHGE+cL._AC_UL320_.jpg'
  alt =''
  />
);


const Title = () => <h1> Great Stories for Children </h1>
const Author = () => <h4>by Ruskin Bond</h4>


ReactDom.render(<BookList/>,document.getElementById('root'));