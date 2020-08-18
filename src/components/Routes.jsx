
import { CountryPage, DetailPage, BoardPage } from '.';
import React, { useRef } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from "./Main";
import { Menu } from "./Menu";

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
            case "country-nav": {
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
    return (
        <>
            <BrowserRouter>
                <Menu scrollToComponent={scrollToComponent} />
                <Switch>

                    <Route path="/country" component={CountryPage} />
                    <Route path="/details" component={DetailPage} />
                    <Route path="/board" component={BoardPage} />
                    <Route
                        path="/"
                        render={() => (
                            <Main
                                page2Ref={page2Ref}
                                page3Ref={page3Ref}
                                page4Ref={page4Ref}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}