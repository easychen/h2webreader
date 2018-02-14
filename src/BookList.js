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
        "books":[],
        "bookurl":""
    }

    doJump()
    {
        this.props.history.push('/'+encodeURIComponent( this.state.bookurl ));
        //console.log( this.props );
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
        
        return <div className="ListContainer">
            <h2>氢书列表</h2>
            <ul>
            { books.length > 0 && books.map((item)=>{
                // console.log( item );
                return <li key={item.bookid}><Link to={'/'+encodeURIComponent(item.bookurl)}>{item.name}</Link></li>
            }) }
            </ul>
            <div className="JumpBox">
            <p>
            <input type="text"  placeholder="输入h2zip文件的url" value={this.state.bookurl} onChange={ ( evt )=>{ this.setState( { "bookurl" : evt.target.value } ) } }/></p>
            <p>
            <button onClick={()=>{this.doJump()}}>跳转</button></p>
            </div>
            
        </div>;
    }
}