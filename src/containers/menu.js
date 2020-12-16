import React,{useEffect, useState,useContext} from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { fontFamily,ColorRgb } from '../components/theme';
import {IoIosLogOut} from 'react-icons/io'
import { useLocation } from 'react-router-dom';


function Menu(props) {
  const location = useLocation();

    const userCtx = useContext(UserContext);
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();
    const [ diplayNone, setDisplayNone ] = useState("block");
    const [ headerHeight, setheaderHeight ] = useState("50px");
    
    useEffect(() => {
      const userId = localStorage.getItem("userId", []);
      const userName = localStorage.getItem("userName", []);
      setUserId(userId);
      setUserName(userName);

      
    }, []);

      const clickhandle = ()=>{
        userCtx.logout();
        window.location.reload(false);
      };

      useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath);
        if(currentPath !== "/"){
          setDisplayNone("none");
          setheaderHeight("70px");
        }else{
          setDisplayNone("block");
          setheaderHeight("50px");
        }
      }, [location]);

  return (
    <Componentss>
      <div style={{display:diplayNone}} className="Background">
        <div className="LogoHeadPar container">
            <div style={{backgroundImage:`url(/head.jpg)`}} className="logoPar"></div>
        </div>
      </div>
     
      <div style={{height:headerHeight}} className="MainMenus">
        <div className="menuPar container">
              <div className="menus">
                      <div className="items">
                      <Link to="/">Нүүр</Link>
                      <div className="line"></div>
                    </div>
                    <div className="items">
                      <Link to="/comp-check">Шалгах</Link>
                      <div className="line"></div>
                    </div>
                    <div className="items">
                      <Link to="/comp-request">Хүсэлт</Link>
                      <div className="line"></div>
                    </div>
                   
              </div>
              <div className="userMenuPar">
                {/* <span className="UserNameMenu"><Link to="/">{userName}</Link> </span> */}
                <span className="UserNameMenu"><Link to="#">Дондогдулам</Link> </span>
                <span className="Logout"><Link onClick={clickhandle} to="/"><span>Гарах</span><IoIosLogOut /></Link></span>
              </div>
          </div>
      </div>
    </Componentss>
  );
}

export default Menu;

const Componentss = styled.div`
    font-family:${fontFamily};
    letter-spacing: -0.1px;
    position: relative;
    z-index: 2;
    .Background{
      width:100%;
      background-color:white;
    .LogoHeadPar{
        // background-color:red;
        height:130px;
        width:100%;
        .logoPar{
          // background: url("/head.jpg");
          text-align:center;
          width:100%;
          height:100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  
    .MainMenus{
      // border-top: 0.1px solid rgba(${ColorRgb}, 0.5);
      background-color:white;
      display:flex;
      flex-direction:row;
      align-items:center;
      width: 100%;
      box-shadow: 0px 2px 8px -2px rgba(${ColorRgb}, 0.5);
      .menuPar {
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
        width:100%;
        .userMenuPar{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items:center;
          width:20%;
          .UserNameMenu{
              a {
                color:black;
                text-decoration: none !important;
              }
          }
          .Logout{
            a {
              display:flex;
              align-items:center;
              color:black;
              text-decoration: none !important;
              color:rgba(${ColorRgb},0.9);
              svg{
                margin-left:4px;
                font-size:22px;
                color:rgba(${ColorRgb},0.9);
              }
            }
          }
        }
        .menus {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 30%;
          
          .items {
              font-size:17px;
              font-weight:500;
              &:hover{
                  .line{
                    transform:scale(1);
                  }
              }
              .line{
                  transition:all 0.4s ease;
                  height:2px;
                  width:100%;
                  background-color:black;
                  transform:scale(0);
              }
            a {
              color:black;
              text-decoration: none !important;
            }
          }
        }
    }
    }

    
  @media only screen and (max-width:768px){
    .LogoHeadPar{
      // background-color:red;
      height:40px;
      width:100%;
      .logoPar{

      }
    }
      .menuPar{
          .menus{
              width:100%;
          }
      }
  }
`;
