(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Jon Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/666?cb=20190401173347",occupation:"Lord in the North",location:"Winterfell"},{id:2,name:"Sansa Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/Sansa_S8.jpg/revision/latest/scale-to-width-down/700?cb=20190206213553",occupation:"Lady of Winterfell",location:"Winterfell"},{id:3,name:"Arya Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/b/b1/Arya_Season_8.jpg/revision/latest/scale-to-width-down/700?cb=20190206213617",occupation:"Faceless One",location:"Winterfell"},{id:4,name:"Brandon Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/1/1c/Bran_S8_EP2infobox.jpg/revision/latest/scale-to-width-down/608?cb=20190418012948",occupation:"Three-Eyed Raven",location:"Winterfell"},{id:5,name:"Davos Seaworth",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Davos_s8_ep2_infobox.jpg/revision/latest/scale-to-width-down/638?cb=20190422024848",occupation:"The Onion Knight",location:"Winterfell"},{id:6,name:"Tormund",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/4/49/TormundWinterfell.PNG/revision/latest?cb=20190415184600",occupation:"Free Folk",location:"Winterfell"},{id:7,name:"Benjen Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/0/0f/610_Benjen_Promo_Crop.png/revision/latest/scale-to-width-down/700?cb=20160629183134",occupation:"Brother of the Watch",location:"Beyond the Wall"},{id:8,name:"Cersei Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/2/22/Cersei_on_Throne_Winterfell_Ep_s8_infobox_size.jpg/revision/latest?cb=20190415180839",occupation:"Queen of the 7 Kingdoms",location:"King's Landing"},{id:9,name:"Jaime Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/51/JaimeLannisterSeason8.PNG/revision/latest?cb=20190207112813",occupation:"Knight of the 7 Kingdoms",location:"Winterfell"},{id:10,name:"Tyrion Lannister",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/a/ae/Tyrion_S8_EP2INFOBOX.jpg/revision/latest/scale-to-width-down/618?cb=20190417235117",occupation:"Hand of the Queen",location:"Winterfell"},{id:11,name:"Bronn of the Blackwater",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/9/99/Bronn_Dragonpit.jpg/revision/latest?cb=20170903202847",occupation:"Lord of Blackwater",location:"Winterfell"},{id:12,name:"Daenerys Targaryen",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/3/3a/Dany_S8_EP2infobox.jpg/revision/latest/scale-to-width-down/601?cb=20190417235027",occupation:"Mother of Dragons",location:"Winterfell"},{id:13,name:"Grey Worm",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/0/0c/Grey_Worm_Longer.jpg/revision/latest?cb=20170728152422",occupation:"Unsullied",location:"Winterfell"},{id:14,name:"Missandei",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/0/0d/Profile-Missandei.PNG/revision/latest?cb=20170818044646",occupation:"Advisor to the Queen",location:"Winterfell"},{id:15,name:"Theon Greyjoy",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/78/TheonS8E1.PNG/revision/latest?cb=20190415192721",occupation:"Lord of the Iron Islands",location:"Winterfell"},{id:16,name:"Samwell Tarley",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/3/30/Samwell_Season_8_Cropped.PNG/revision/latest?cb=20190207112410",occupation:"Maester",location:"Winterfell"}]},,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(2),r=n.n(a),s=n(3),c=n(4),l=n(7),m=n(5),g=n(8);n(15);var h=function(e){return i.a.createElement("div",{onClick:function(){return e.removeFriend(e.id)},className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))))};n(16);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(17);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children)},u=n(6),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:u,friendsClicked:[0],score:0,highScore:0,responseText:"Click a picture to start!"},n.removeFriend=function(e){var t=n.state.friendsClicked;t.includes(e)?n.gameOver():(n.scoreUp(),t.push(e),n.setState({friendsClicked:t})),n.shuffle()},n.gameOver=function(){var e=n.state.score;n.state.highScore<e&&n.setState({highScore:e}),n.setState({score:0,friendsClicked:[0],responseText:"You guessed wrong!"})},n.scoreUp=function(){n.setState({score:n.state.score+1,responseText:"You guessed right!"})},n.shuffle=function(){for(var e,t,o=n.state.friends,i=o.length;i>0;)t=Math.floor(Math.random()*i),e=o[--i],o[i]=o[t],o[t]=e;n.setState({friends:o})},n.style={score:{width:"100%",textAlign:"center"}},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.shuffle()}},{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(f,null,"GoT Clicker Game!"),i.a.createElement("h3",{style:this.style.score},"Score: ",this.state.score,"   High Score: ",this.state.highScore),i.a.createElement("h3",{style:this.style.score},this.state.responseText),this.state.friends.map(function(t){return i.a.createElement(h,{removeFriend:e.removeFriend,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})}))}}]),t}(o.Component);n(18);r.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8c2ffe4e.chunk.js.map