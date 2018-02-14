import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

@withRouter
export default class BookList extends Component
{
    state = { 
        "books":[]
    }
    
    componentDidMount()
    {
        readTextFile( 'books/index.json' , ( data )=>
        {
            this.setState( { "books":JSON.parse( data ) } )
            // console.log( data );
        } );
        
    }    
    render()
    {
        const books = this.state.books;
        
        return <div className="BookContainer">
            <ul>
            { books.length > 0 && books.map((item)=>{
                // console.log( item );
                return <li key={item.bookid}><Link to={item.bookid}>{item.name}</Link></li>
            }) }
            </ul>
        </div>;
    }
}