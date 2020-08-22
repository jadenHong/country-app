
import { CountryPage, DetailPage, BoardPage, CountryInfo, LogIn, Signup, UserPage } from '.';
import React, { useRef } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from "./Main";
import { Menu } from "./Menu";
import { BoardList } from './BoardList';
import { ListDetail } from './ListDetail';
import { ListEdit } from './ListEdit';

export default () => {
    const page2Ref = useRef();
    const page3Ref = useRef();
    const page4Ref = useRef();
    const scrollToComponent = e => {

        const scroll = (component) => {
            component.current && component.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        };

        const name = e.target.getAttribute("name");
        switch (name) {
            case "country": {
                page2Ref && scroll(page2Ref);
                break;
            }
            case "details": {
                page3Ref && scroll(page3Ref);
                break;
            }
            case "board": {
                page4Ref && scroll(page4Ref);
                break;
            }
            default:
                return;
        }
    }
    const changePage = (e, history) => {
        console.log(history);
        console.log(e.target.getAttribute('name'));
        const path = e.target.getAttribute('name');
        console.log('country')
        history.push(`/${path}`);
    }
    return (
        <>
            <BrowserRouter>
                <Menu scrollToComponent={scrollToComponent} changePage={changePage} />
                <Switch>

                    <Route path="/country" component={CountryPage} />
                    <Route path="/details" component={DetailPage} />
                    <Route path="/board" component={BoardPage} />
                    <Route path="/countryInfo/:countryCode" component={CountryInfo} />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Main
                                page2Ref={page2Ref}
                                page3Ref={page3Ref}
                                page4Ref={page4Ref}
                            />
                        )}
                    />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signup" component={Signup} />
                    <Route path='/userPage' component={UserPage} />
                    <Route path='/boardList' component={BoardList} />
                    <Route path='/listDetail' component={ListDetail} />
                    <Route path='/listEdit/:id' component={ListEdit} />
                </Switch>
            </BrowserRouter>
        </>
    );
}