let resetguy=document.querySelector("#resetbutton");
let startguy=document.querySelector("#startbutton");

let youcount=0;
let compcount=0;

mode="start";

const makemodestart=()=>{
    mode="start"
}

const startingiwant=()=>{
    
    if(mode=="start"){
        
        // gets a number and converts in string for getting choice of computer.
        let getanumber=(min,max)=>{
            return Math.floor(Math.random()*max)+min
        }
        
        let winORlose=(c_choice,user_choice)=>{
            if (c_choice === user_choice) {
                return "That's a tie";
            } else if (
                (c_choice === "Rock" && user_choice === "Scissor") ||
                (c_choice === "Paper" && user_choice === "Rock") ||
                (c_choice === "Scissor" && user_choice === "Paper")
            ) {
                return "Computer wins";
            } else {
                return "User wins";
            }}

                // computer choice
            const compchoice=()=>{
                let choice=["Rock","Paper","Scissor"];
                let cnc=getanumber(0,3);
                let choiceofcomp=choice[cnc]; //computer choice here
                return choiceofcomp
            }

                // computer choice

        const evaluatechoices=(choiceofuser,computerchoice)=>{
            let y=winORlose(`${computerchoice}`,`${choiceofuser}`)
            
            let userscoremeter=document.querySelector("#youinnerscoremeter")
            let compscoremeter=document.querySelector("#compinnerscoremeter")
            let userscore=document.querySelector("#youscore");
            let compscore=document.querySelector("#compuscore");


            if (y=="User wins"){
                youcount += 1;

                let elementhistoryouter=document.getElementById("history");
                let newgif=document.createElement("div");
                newgif.id="gifshower";
                elementhistoryouter.appendChild(newgif);

                if(youcount==1){
                userscoremeter.style.width="70px";
                userscore.innerText="1";
            }
                
                else if(youcount==2){
                userscoremeter.style.width="140px";
                userscore.innerText="2";
                }
                else if(youcount==3){
                userscoremeter.style.width="210px";
                userscore.innerText="3";
            }
                else if(youcount==4){
                userscoremeter.style.width="280px";
                userscore.innerText="4";
            }
                else if(youcount==5){
                userscoremeter.style.width="388px";
                userscore.innerText="5";
                setTimeout(() => {
                    location.reload();
                }, 2000);
                }
            }

            else if (y=="Computer wins"){
                compcount += 1;

                if(compcount==1){
                compscoremeter.style.width="70px";
                compscore.innerText="1";
            }
                
                else if(compcount==2){
                compscoremeter.style.width="140px";
            compscore.innerText="2";
            }
                else if(compcount==3){
                compscoremeter.style.width="210px";
            compscore.innerText="3";
            }
                else if(compcount==4){
                compscoremeter.style.width="280px";
            compscore.innerText="4";
            }
                else if(compcount==5){
                compscoremeter.style.width="388px";
            compscore.innerText="5";
                setTimeout(() => {
                    location.reload();
                }, 2000);
                }

            }

            
            const clearingforcompdecor=(sfbkj)=>{setTimeout(() => {
                clearInterval(operation);
                rcdr=document.getElementById(`${sfbkj}`)
                rcdr.style.borderWidth="0px";
                },1500);}

            let operation=setInterval(()=>{
                if(computerchoice=="Rock"){
                    let rcdr=document.getElementById("rockforcomputer");
                    rcdr.style.borderWidth="40px";
                    rcdr.style.borderColor="white";
                    clearingforcompdecor("rockforcomputer");
                }
                else if(computerchoice=="Paper"){
                    let rcdr=document.getElementById("paperforcomputer");
                    rcdr.style.borderWidth="40px";
                    rcdr.style.borderColor="white";
                    clearingforcompdecor("paperforcomputer");
                }
                else if(computerchoice=="Scissor"){
                    let rcdr=document.getElementById("scissorforcomputer");
                    rcdr.style.borderWidth="40px";
                    rcdr.style.borderColor="white";
                    clearingforcompdecor("scissorforcomputer");
                }
            },1500)
            
            if (computerchoice=="Paper"|| computerchoice=="Rock" || computerchoice=="Scissor"){
                clearingforcompdecor()
            }

            // history deco
            let operationresult=setInterval(()=>{
                let elementhistoryouter=document.getElementById("history");
                let newelement=document.createElement("h2");
                newelement.innerText=y;
                // elementhistoryouter.style.al="center";
                // newelement.style.marginLeft="90px";
                newelement.style.marginTop="8px";
                newelement.style.marginLeft="10px";
                newelement.style.fontFamily="Aerial"
                newelement.style.color="black";
                
                if(newelement.innerText=="User wins"){
                    newelement.style.backgroundColor="limegreen"
                }
                else if(newelement.innerText=="Computer wins"){
                    // newelement.style.color="red";
                    newelement.style.backgroundColor="red"
                }
                else{
                    // newelement.style.color="orange";
                    newelement.style.backgroundColor="yellow"
                }

                elementhistoryouter.append(newelement);
            },1000)

            setTimeout(() => {
                clearInterval(operationresult);
                },1500);

            // adding functionaly to choosy divs
            // user

        }

        // user choice
        const userchoice=()=>{
            let Rockcontainerforyou=document.querySelector("#choosycontainerofyourock");
            let Papercontainerforyou=document.querySelector("#choosycontainerofyoupaper");
            let Scissorcontainerforyou=document.querySelector("#choosycontainerofyouscissor");

            Rockcontainerforyou.addEventListener("click",()=>{
                let computerchoiceis=compchoice();

                let ucdr=document.getElementById("rockforyou");
                ucdr.style.borderWidth="40px";
                ucdr.style.borderColor="white";
                
                remdivuserdecor=()=>{
                setTimeout(()=>{
                    ucdr.style.borderWidth="0px";
                },1500)}
                remdivuserdecor()

                evaluatechoices("Rock",`${computerchoiceis}`);
            });

            Papercontainerforyou.addEventListener("click",()=>{
                let computerchoiceis=compchoice();
                
                let ucdr=document.getElementById("paperforyou");
                ucdr.style.borderWidth="40px";
                ucdr.style.borderColor="white";
                
                remdivuserdecor=()=>{
                setTimeout(()=>{
                    let ucdr=document.getElementById("paperforyou");
                    ucdr.style.borderWidth="0px";
                },1500)}
                remdivuserdecor()

                evaluatechoices("Paper",`${computerchoiceis}`);
            });

            Scissorcontainerforyou.addEventListener("click",()=>{
                let computerchoiceis=compchoice();

                let ucdr=document.getElementById("scissorforyou");
                ucdr.style.borderWidth="40px";
                ucdr.style.borderColor="white";
                
                remdivuserdecor=()=>{
                setTimeout(()=>{
                    ucdr.style.borderWidth="0px";
                },1500)}
                remdivuserdecor()

                evaluatechoices("Scissor",`${computerchoiceis}`);
            });

        }
        userchoice();

    }

// starting i want ending }
}
                
                
// calls that startingiwant function to get started.
startguy.addEventListener("click",()=>{
makemodestart();
startingiwant();
})

resetguy.addEventListener("click",()=>{
    location.reload();
})
                
                
                    
                    
