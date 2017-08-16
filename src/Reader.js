import React, { Component } from 'react';
import { withRouter } from 'react-router';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';

@withRouter
export default class Reader extends Component
{
    state = { 
        "roles":[],
        "talks":[],
        "show_talks":[]
    }
    
    componentDidMount()
    {
        let bookid = '001';
        
        if( this.props.match.params.bookid )
            bookid = this.props.match.params.bookid;
        
        const bookpath = '/books/'+bookid+'.h2zip';

        console.log( bookpath );

                
        JSZipUtils.getBinaryContent( bookpath , async ( err, data ) => 
        {
            if(err) 
            {
                console.log( err );
                throw err; // or handle err
            }
            else
            {
                //console.log("FILE OK");

                const zip = await JSZip.loadAsync( data );
                const data2 = await zip.file("h2content.json").async("string");
                const jsondata = JSON.parse( data2 );

                if( jsondata )
                {
                    let roles_array  = [];

                    jsondata.roles.map( (item) => {
                        roles_array[item.id] = item;
                        return true;
                    } );

                    this.setState( { "roles":roles_array , "talks":jsondata.talks } );
                }                
            }
        });
    }

    nl2br (str) 
    {
        // eslint-disable-next-line
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br/>' + '$2');
    }

    _add_talk()
    {
        let talks = this.state.talks;
        let show_talks = this.state.show_talks;
        
        if( talks.length < 1 ) return false;
        
        let thetalk = talks.shift();
        show_talks.push(thetalk);

        this.setState( {"talks":talks , "show_talks":show_talks} );

        setTimeout( ()=>{
            const scrollHeight = this.tlist.scrollHeight;
            const height = this.tlist.clientHeight;
            const maxScrollTop = scrollHeight - height;
            this.tlist.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        } , 100 );
    }

    render()
    {
    const talks = this.state.show_talks;
    const roles = this.state.roles;
        
    return  <div className="BookContainer">
        <ul className="TheTalkList" ref={(c)=>{this.tlist=c;}}>
            { talks && talks.length > 0 && talks.map( (item)=>
            {
                return <li key={item.id}>
                { item.type === 'voice' && <div className="TheVoiceTalk"><div className="TheVoiceTalkText">{item.talk}</div></div> }

                { item.type === 'talk' && roles[item.userid].type === 'main' && <div className="TheTalkLine Right">
                    <div className="TheAvatar">
                        <img src={roles[item.userid].avatar} alt={roles[item.userid].name} />
                    </div>
                    <div className="TheContent">
                        <div className="TheUsername">
                            {roles[item.userid].name}
                        </div>
                        <div className="TheText">
                        <span className="TheTextArrow">▶︎</span>
                            <div  dangerouslySetInnerHTML={{'__html':this.nl2br(item.talk)}}/>
                        </div>
                    </div>
                </div> }

                { item.type === 'talk' && roles[item.userid].type !== 'main' && <div className="TheTalkLine Left">
                    <div className="TheAvatar">
                        <img src={roles[item.userid].avatar} alt={roles[item.userid].name} />
                    </div>
                    <div className="TheContent">
                        <div className="TheUsername">
                            {roles[item.userid].name}
                        </div>
                        <div className="TheText Left">
                            <span className="TheTextArrow">◀︎</span>
                            <div  dangerouslySetInnerHTML={{'__html':this.nl2br(item.talk)}}/>
                        </div>
                    </div>
                </div> }
                

                </li>;
            }) }
            { talks.length < 1 && <li className="Intro">点下边的✦开始 <span role="img" aria-label="emoji-happy">🤠</span></li> }
        </ul>
        <div className="TheTouthPad noselect" onClick={()=>this._add_talk()}>
        { this.state.talks.length > 0  && <span className="star">✦</span> } 
        { this.state.talks.length < 1  && <span>~ End ~</span> } 
        </div>
    </div>
    }
}